import connection from "../database/connect.js";

/**
 *  Executa o Objeto SQL enviado
 * @param {SQL} query Exemplo: "nome" : "nomesql", "sql" : "comando sql"
 * @returns 
 */
export function executeQuery(query) {
    return new Promise((resolve, reject) => {
        connection.query(query.sql, (erro, result) => {
            if (erro) {
                reject(`Erro ao executar a query ${query.nome}. ERRO: ${erro}`); // 
            } else {
                resolve(result);
            }
        });
    });
}