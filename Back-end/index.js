import app from "./scr/index.js";
import connection from "./scr/app/database/connect.js";

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
             /*const sql = fs.readFile(join('/scr', 'app', 'database',  'new.sql'), 'utf-8', (error, data) => { // lê o sql para gerar todas as tabelas caso não exista
    if (error) {
        return console.log("Erro: ", error);
    }
 
    console.log(data);
})
connection.query(sql, (error, result) => {
   if (error) {
       console.log("Erro ao iniciar tabelas no banco de dados.")
   } else {
       console.log(`Servidor rodando na porta ${PORT}`)
   }
})

})
}
})*/