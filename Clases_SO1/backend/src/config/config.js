const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  server: {
    port: process.env.SERVER_PORT,
  },
  oracleConfig: {
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASS,
    connectString: process.env.ORACLE_CONNSTR,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
  },
};