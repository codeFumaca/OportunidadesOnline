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

    vincularProfissao(idProcurante, idProfissao, idArea) {
        const sql = `INSERT INTO procurante_has_profissao (procurante_id, profissao_id, profissao_area_id) VALUES (?,?,?);`
        return consulta(sql, [idProcurante, idProfissao, idArea], "Não foi possível vincular o procurante à Profissão")
    }

    desvincularProfissao(procurante_id, profissao_id) {
        const sql = `DELETE FROM procurante_has_profissao WHERE procurante_id=? AND profissao_id=?;`
        return consulta(sql, [procurante_id, profissao_id], "Não foi possível vincular o procurante à Profissão")
    }

    findProfissao(idProcurante) {
        const sql = `SELECT * FROM procurante_has_profissao WHERE procurante_id=?;`
        return consulta(sql, idProcurante, "Nenhuma profissão vinculado ao procurante")
    }
}

export default new ProcuranteRepositories()
