import mysql from 'mysql'

var connection = mysql.createConnection({
  host     : 'localhost',
  port: '3306',
  user     : 'root',
  password : '',
  database : 'bd_oportunidades_online'
});

/*connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});
Query Example

*/

export default connection;