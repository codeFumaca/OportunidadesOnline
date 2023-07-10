import { consulta } from "../database/connect.js"

class EmpresaRepositories {

    create(empresa) {
        const sql = `INSERT INTO empresa SET ?;`
        return consulta(sql, empresa, "Erro ao tentar cadastrar uma nova empresa")
    }
    find() {
        const sql = "SELECT * FROM empresa;";
        return consulta(sql, "Não foi possível localizar");
    }

    findById(id) {
        const sql = `SELECT * FROM empresa WHERE id=?;`
        return consulta(sql, id, "Nenhuma empresa atribuida ao ID informado")
    }

    findByName(nome) {
        const sql = `SELECT * FROM empresa WHERE nome=?;`
        return consulta(sql, nome, "Nenhuma empresa apresenta o NOME informado")
    }

    update(empresa, id) {
        const sql = `UPDATE empresa SET ? WHERE id=?;`
        return consulta(sql, [empresa, id], "Não foi possível atualizar a empresa")
    }

    delete(id) {
        const sql = `DELETE FROM empresa WHERE id=?;`
        return consulta(sql, id, "Não foi possível deletar esta empresa")
    }
}

export default new EmpresaRepositories()
