import mysql from 'mysql'

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'bd_oportunidades_online'
});
/**
 * Executa o código sql com ou sem valores
 * @param {string} sql instrução sql que vai executar
 * @param {string = id | [id, nome]} valores 
 * @param {string} MensagemReject Mensagem exibida caso reject
 * @returns objeto da promisse
 */

export const consulta = (sql, valores = '', MensagemReject) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, valores, (error, result) => {
      if (error) { return reject(MensagemReject) }
      return resolve(JSON.parse(JSON.stringify(result)))
    })
  })
}

export default connection;
