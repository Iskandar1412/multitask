const oracledb = require('oracledb');
const { oracleConfig } = require('../config/config');
const path = require('path');

// this is not needed if you use the default location

// path to client
// const oracleClient = path.join('C:', 'oracle', 'db_home', 'bin');

// init client
// oracledb.initOracleClient({ libDir: oracleClient });

// init database

module.exports.start = async () => {
    await oracledb.createPool(oracleConfig);
};

// close database
module.exports.close = async () => {
    await oracledb.getPool().close(0);
};

// request handler (pool handler)
module.exports.pool = async (statement, blinds = [], opts = {}) => {
    let conn;
    let result = [];
    opts.outFormat = oracledb.dbObjectAsPojo;
    try {
        conn = await oracledb.getConnection();
        result = await conn.execute(statement, blinds, opts);
        return result;
    } catch (e) {
        console.error(e);
        throw e;
    } finally {
        if (conn) {
            try {
                await conn.close();
            } catch (e) {
                console.error(e);
            }
        }
    }
};