import { consulta } from "../database/connect.js"

class ProfissaoRepositories { // FALTA ARRUMAR SQL

    create(profissao) {
        const sql = `INSERT INTO profissao SET ?;`
        return consulta(sql, profissao, "Erro ao tentar cadastrar uma profissao")
    }
    find() {
        const sql = "SELECT * FROM profissao;";
        return consulta(sql, "Não foi possível localizar");
    }

    findById(id) {
        const sql = `SELECT * FROM profissao WHERE id=?;`
        return consulta(sql, id, "Nenhuma profissao atribuida ao ID informado")
    }

    findByName(nome) {
        const sql = `SELECT * FROM profissao WHERE nome LIKE %${nome}%;`
        return consulta(sql, nome, "Nenhuma profissao apresenta o NOME informado")
    }

    update(profissao, id) {
        const sql = `UPDATE profissao SET ? WHERE id=?;`
        return consulta(sql, [profissao, id], "Não foi possível atualizar a area")
    }

    delete(id) {
        const sql = `DELETE FROM area WHERE id=?;`
        return consulta(sql, id, "Não foi possível deletar esta area")
    }

}

export default new ProfissaoRepositories()
