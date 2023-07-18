import { consulta } from "../database/connect.js"

class VagaRepositories {

    create(area) {
        const sql = `INSERT INTO area SET ?;`
        return consulta(sql, area, "Erro ao tentar cadastrar uma nova area")
    }
    find() {
        const sql = "SELECT * FROM area;";
        return consulta(sql, "Não foi possível localizar");
    }

    findById(id) {
        const sql = `SELECT * FROM area WHERE id=?;`
        return consulta(sql, id, "Nenhuma area atribuida ao ID informado")
    }

    findByName(nome) {
        const sql = `SELECT * FROM area WHERE nome LIKE '%${nome}%';`
        return consulta(sql, nome, "Nenhuma area apresenta o NOME informado")
    }

    update(area, id) {
        const sql = `UPDATE area SET ? WHERE id=?;`
        return consulta(sql, [area, id], "Não foi possível atualizar a area")
    }

    delete(id) {
        const sql = `DELETE FROM area WHERE id=?;`
        return consulta(sql, id, "Não foi possível deletar esta area")
    }

}

export default new VagaRepositories()
