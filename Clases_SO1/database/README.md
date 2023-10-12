# Oracle database

## Get started

```
docker run -d -p 1521:1521 \
-e ORACLE_PASSWORD=passwordso1 \
-e APP_USER=APPUSER \
-e APP_USER_PASSWORD=passwordapp \
-v $PWD/database:/container-entrypoint-initdb.d \
-v oracle-volume:/opt/oracle/oradata \
gvenzl/oracle-xe:21.3.0
```