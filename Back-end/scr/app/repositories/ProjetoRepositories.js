import { consulta } from "../database/connect.js"

class ProjetoRepositories {

    create(projeto) {
        const sql = `INSERT INTO projeto SET ?;`
        return consulta(sql, projeto, "Erro ao tentar cadastrar um novo projeto")
    }
    find() {
        const sql = "SELECT * FROM projeto;";
        return consulta(sql, "Não foi possível localizar");
    }

    findById(id) {
        const sql = `SELECT * FROM projeto WHERE id=?;`
        return consulta(sql, id, "Nenhum projeto atribuido ao ID informado")
    }

    findByName(nome) {
        const sql = `SELECT * FROM projeto WHERE nome LIKE '%${nome}%';;`
        return consulta(sql, nome, "Nenhum projeto atribuido ao NOME informado")
    }

    update(projeto, id) {
        const sql = `UPDATE projeto SET ? WHERE id=?;`
        return consulta(sql, [projeto, id], "Não foi possível atualizar o projeto")
    }

    delete(id) {
        const sql = `DELETE FROM projeto WHERE id=?;`
        return consulta(sql, id, "Não foi possível deletar este projeto")
    }
}

export default new ProjetoRepositories()
