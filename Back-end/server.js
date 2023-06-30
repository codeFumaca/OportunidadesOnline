import app from "./scr/app.js";
import connection from "./scr/database/connect.js";

const PORT = 3000;

connection.connect((erro) => { // Tentar conectar com o servidor
    if (erro) {
        console.log('Falha na conexão:' + erro) // Mensagem de falha caso não haja conexão com o banco de dados.
    } else {
        console.log('Conexão com o Banco realizada com sucesso!') // Mensagem de sucesso ao abrir conexão com o o banco de daos
        app.listen(PORT, () => { // ligar servidor
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    }
})

