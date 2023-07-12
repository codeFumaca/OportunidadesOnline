import app from "./scr/app.js";
import connection from "./scr/app/database/connect.js";
import fs from "fs"
import { join } from "path";

const PORT = 3000;

function executeQuery(query) { // Função para percorrer o JSON contendo o banco de dados e aplicar as queries
    return new Promise((resolve, reject) => {
        connection.query(query.sql, (erro, result) => {
            if (erro) {
                reject(`Erro ao executar a consulta ${query.nome}. ERRO: ${erro}`);
            } else {
                resolve();
            }
        });
    });
}

connection.connect(async (erro) => {
    if (erro) {
        console.log('Falha na conexão:' + erro);
    } else {
        try {
            const sqlFilePath = await fs.promises.readFile(join('scr', 'app', 'database', 'struct.json'), 'utf-8');
            const queries = JSON.parse(sqlFilePath);

            for (const config of queries.configs) {
                await executeQuery(config);
            }

            console.log("Banco de dados configurado com sucesso!");

            for (const tabela of queries.tabelas) {
                await executeQuery(tabela);
            }

            console.log("Tabelas iniciadas com sucesso!");

            for (const trigger of queries.triggers) {
                await executeQuery(trigger);
            }

            console.log("Triggers iniciados com sucesso!");

            app.listen(PORT, () => {
                console.log(`Servidor rodando na porta ${PORT}`);
            });
        } catch (error) {
            console.log("Erro ao ler o arquivo:", error);
        }
    }
});