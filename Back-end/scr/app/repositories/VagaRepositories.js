import { consulta } from "../database/connect.js"

class VagaRepositories {

    create(area) {
        const sql = ` INSERT INTO vaga (nome, salarioProposto, requerimentosVaga, formacaoNecessaria, profissao_id, projeto_id, procurante_id, empresa_id) VALUES (?, ?, ?, ?, NULL, ?, ?, ?);`;
        return consulta(sql, area, "Erro ao tentar cadastrar uma nova vaga")
    }
    find() {
        const sql = "SELECT * FROM vaga;";
        return consulta(sql, "Não foi possível localizar");
    }

    findById(id) {
        const sql = `SELECT * FROM vaga WHERE id=?;`
        return consulta(sql, id, "Nenhuma area atribuida ao ID informado")
    }

    findByName(nome) {
        const sql = `SELECT * FROM vaga WHERE nome LIKE '%${nome}%';`
        return consulta(sql, nome, "Nenhuma vaga apresenta o NOME informado")
    }

    update(vaga, id) {
        const sql = `UPDATE vaga SET ? WHERE id=?;`
        return consulta(sql, [vaga, id], "Não foi possível atualizar a vaga")
    }

    delete(id) {
        const sql = `DELETE FROM vaga WHERE id=?;`
        return consulta(sql, id, "Não foi possível deletar esta vaga")
    }

    addProcurante(procurante_id, id) {
        const sql = `UPDATE vaga SET procurante_id = ? WHERE id = ?;`
        return consulta(sql, [procurante_id, id], "Não foi possível atualizar a vaga")
    }

    removeProcurante(id) {
        const sql = `UPDATE vaga SET procurante_id = NULL WHERE id = ?;`
        return consulta(sql, id, "Não foi possível atualizar a vaga")
    }

}

export default new VagaRepositories()
