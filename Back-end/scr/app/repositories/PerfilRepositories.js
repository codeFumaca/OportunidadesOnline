import connection from "../database/connect.js"

class PerfilRepositories {
    create() { }
    find() {
        const sql = "SELECT * FROM perfil;"
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if (error) { return reject('Não foi possível localizar') }
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })

    }
    findById(id) {
        const sql = `SELECT * FROM perfil WHERE id=?;`
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, result) => {
                if (error) { return reject('Nenhum perfil atribuido ao ID informado') }
                return resolve(JSON.parse(JSON.stringify(result)))
            })
        })
        
    }

    findByNome() { }
    update() { }
    delete() { }
}

export default new PerfilRepositories()