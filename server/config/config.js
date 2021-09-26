require("dotenv").config();

const development = {
  "username": 'root',
  "password": process.env.DATABASE_LOCALPASSWORD,
  "database": "cloudi",
  "host": "127.0.0.1",
  "dialect": "mysql"
};

const production = {
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": "cloudi",
  "host": process.env.DATABASE_HOST,
  "dialect": "mysql",
  "port": process.env.DATABASE_PORT
};

module.exports = { development, production };