const mysql = require('mysql');
require ('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
});

connection.connect((err) =>{
  if (err) {
    console.log(err)
  } else {
    console.log("successfully connected!")
  }
});

connection.query('SHOW tables', function (err, tables){
  console.log(tables);
});

module.exports = connection;