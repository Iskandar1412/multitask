# Backend

A backend using express and Oracle as database.

## Get Started

~~~
# Setting env vars
export ORACLE_USER=oracle
export ORACLE_PASS=<your_pass>
export ORACLE_CONNSTR=localhost:1521/xepdb1
export SERVER_PORT=3000

npm install
npm start
~~~

## Get Started with Docker

~~~
docker run -d -p 3800:3800 \
-e ORACLE_USER=APP_USER \
-e ORACLE_PASS=PASSWORDAPP \
-e ORACLE_CONNSTR=172.17.0.2:1521/xepdb1 \
backend:0.1.0
~~~