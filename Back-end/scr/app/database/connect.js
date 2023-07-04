import mysql from 'mysql'

var connection = mysql.createConnection({
  host     : 'localhost',
  port: '3306',
  user     : 'root',
  password : '',
  database : 'teste'
});

export default connection;
