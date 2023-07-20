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
        const sql = `SELECT * FROM empresa WHERE nome LIKE '%${nome}%';`
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

    vincularProjeto(idEmpresa, idProjeto) {
        const sql = `INSERT INTO empresa_has_projeto (empresa_id, projeto_id) VALUES (?,?);`
        return consulta(sql, [idEmpresa, idProjeto], "Não foi possível vincular a empresa ao projeto")
    }

    desvincularProjeto(idEmpresa, idProjeto) {
        const sql = `DELETE FROM empresa_has_projeto WHERE empresa_id=? AND projeto_id= ?;`
        return consulta(sql, [idEmpresa, idProjeto], "Não foi possível desvincular a empresa ao projeto")
    }

    findProjeto(idEmpresa) {
        const sql = `SELECT * FROM empresa_has_projeto WHERE empresa_id=?;`
        return consulta(sql, idEmpresa, "A empresa não está vinculada a nenhum projeto")
    }

    vincularArea(idEmpresa, idArea) {
        const sql = `INSERT INTO empresa_has_area (empresa_id, area_id) VALUES (?,?);`
        return consulta(sql, [idEmpresa, idArea], "Não foi possível vincular a empresa à area")
    }

    desvincularArea(idEmpresa, idArea) {
        const sql = `DELETE FROM empresa_has_area WHERE empresa_id=? AND area_id=?`
        return consulta(sql, [idEmpresa, idArea], "Não foi possível desvincular a empresa à area")
    }

    findArea(idEmpresa) {
        const sql = `SELECT * FROM empresa_has_area WHERE empresa_id=?;`
        return consulta(sql, idEmpresa, "Não ha nenhuma área vinculada à empresa informada")
    }
}

export default new EmpresaRepositories()
