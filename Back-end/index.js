import app from "./scr/index.js";
import connection from "./scr/app/database/connect.js";
import fs from "fs"
import { join } from "path";

const PORT = 3000;

connection.connect((erro) => { // Tentar conectar com o servidor
    if (erro) {
        console.log('Falha na conexão:' + erro) // Mensagem de falha caso não haja conexão com o banco de dados.
    } else {
        const sqlFilePath = fs.readFile(join('scr', 'app', 'database', 'struct.json'), 'utf-8', (error, data) => {
            if (error) {
                return console.log("Erro ao ler o arquivo: ", error);
            } else {
                const queries = JSON.parse(data)
                queries.configs.forEach((config) => {
                    connection.query(config.sql, (erro, result) => {
                        if (erro) {
                            return console.log(`Erro ao definir a configuração ${config.nome}. ERRO: ` + erro)
                        }
                    })
                })
                console.log("Banco de dados configurado com sucesso!")
                queries.tabelas.forEach((tabela) => {
                    connection.query(tabela.sql, (erro, result) => {
                        if (erro) {
                            return console.log(`Erro ao iniciar a tabela  ${tabela.nome}. ERRO: ` + erro)
                        }
                    })
                });
                console.log("Tabelas iniciadas com sucesso!")
                queries.triggers.forEach((trigger) => {
                    connection.query(trigger.sql, (erro, result) => {
                        if (erro) {
                            return console.log(`Erro ao iniciar a trigger  ${trigger.nome}. \nERRO: ` + erro)
                        }
                    })
                });
                console.log("Triggers iniciados com sucesso!")
                app.listen(PORT, () => {
                    console.log(`Servidor rodando na porta ${PORT}`) // Mensagem de sucesso ao abrir conexão com o o banco de dados
                })
            }
        })
    }
}
)