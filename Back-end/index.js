import app from "./scr/app.js";
import connection from "./scr/app/database/connect.js";
import fs from "fs"
import { join } from "path";
import { executeQuery } from "./scr/app/functions/executeQuery.js";

const PORT = 3000;

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

            console.log("Banco de dados OK!");

            for (const tabela of queries.tabelas) {
                await executeQuery(tabela);
            }

            console.log("Tabelas OK!");

            for (const trigger of queries.triggers) {
                // Verificando se o trigger já existe
                const checkTriggerQuery = { "sql": ` SELECT trigger_name FROM information_schema.triggers WHERE trigger_schema = 'bd_oportunidades_online' AND trigger_name = '${trigger.nome}'; ` };

                const results = await executeQuery(checkTriggerQuery);
                if (results.length > 0) {
                    // O trigger já existe, você pode optar por deixá-lo como está ou excluí-lo antes de criar um novo
                    console.log('O trigger', trigger.nome, 'já existe.');
                } else {
                    // O trigger não existe, pode prosseguir com a criação
                    await executeQuery(trigger);
                    console.log(`Trigger ${trigger.nome} criado com sucesso!`);
                }
            }

            console.log("Triggers OK!");

            app.listen(PORT, () => {
                console.log(`Servidor rodando na porta ${PORT}`);
            });
        } catch (error) {
            console.log("Erro ao ler o arquivo:", error);
        }
    }
});