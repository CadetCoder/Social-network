const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'' ,
  database: 'vue-groupomania',
  port : 3308
});

connection.connect((err) =>{
  if (err) {
    console.log(err)
  } else {
    console.log('Connected to the MySQL server.')
  }
});

connection.query('SHOW tables', function (err, tables){
  console.log(tables);
});

module.exports = connection;