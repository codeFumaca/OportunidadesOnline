import { consulta } from "../database/connect.js"

class PerfilRepositories {

    /*create(perfil) {
        const sql = `INSERT INTO perfil SET ?;`
        return consulta(sql, perfil, "Erro ao tentar cadastrar um novo perfil")
    }*/ // Desnecessário 
    find() {
        const sql = "SELECT * FROM perfil;";
        return consulta(sql, "Não foi possível localizar");
    }

    findById(id) {
        const sql = `SELECT * FROM perfil WHERE id=?;`
        return consulta(sql, id, "Nenhum perfil atribuido ao ID informado")
    }

    findByName(nome) {
        const sql = `SELECT * FROM perfil WHERE nome LIKE '%${nome}%';`
        return consulta(sql, nome, "Nenhum perfil atribuido ao NOME informado")
    }

    update() {
        const sql = `UPDATE perfil SET ? WHERE id=?;`
        return consulta(sql, [perfil, id], "Não foi possível atualizar o perfil")
    }

    delete(id) {
        const sql = `DELETE FROM perfil WHERE id=?;`
        return consulta(sql, id, "Não foi possível deletar este perfil")
    }
}

export default new PerfilRepositories()
