import { consulta } from "../database/connect.js"

class ProcuranteRepositories {

    create(procurante) {
        const sql = `INSERT INTO procurante SET ?;`
        return consulta(sql, procurante, "Erro ao tentar cadastrar um novo procurante")
    }
    find() {
        const sql = "SELECT * FROM procurante;";
        return consulta(sql, "Não foi possível localizar");
    }

    findById(id) {
        const sql = `SELECT * FROM procurante WHERE id=?;`
        return consulta(sql, id, "Nenhum procurante atribuido ao ID informado")
    }

    findByName(nome) {
        const sql = `SELECT * FROM procurante WHERE nome LIKE '%${nome}%';`
        return consulta(sql, nome, "Nenhum procurante atribuido ao NOME informado")
    }

    update(procurante, id) {
        const sql = `UPDATE procurante SET ? WHERE id=?;`
        return consulta(sql, [procurante, id], "Não foi possível atualizar o procurante")
    }

    delete(id) {
        const sql = `DELETE FROM procurante WHERE id=?;`
        return consulta(sql, id, "Não foi possível deletar este procurante")
    }
}

export default new ProcuranteRepositories()
