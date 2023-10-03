-- CREATE DATABASE IF NOT EXISTS nestjstestdb

SELECT 'CREATE DATABASE nestjstestdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'nestjstestdb')\g

exec 