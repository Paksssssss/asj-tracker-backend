const mysql = require("mysql2");

const connection = mysql.createPool(process.env.DATABASE_URL_TEST);

module.exports = connection;
