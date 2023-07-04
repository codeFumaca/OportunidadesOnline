import connection from "../database/connect.js"
import perfilRepositories from "../repositories/perfilRepositories.js";

class PerfilController {

    async index(req, res) { // Buscar
        const result = await perfilRepositories.find()
        res.json(result)
    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        const result = await perfilRepositories.findById(id)
        res.json(result)
    }

    showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        const sql = `SELECT * FROM perfil WHERE nome=?;`
        connection.query(sql, nome, (error, result) => {
            const row = result[0]
            if (error) {
                console.log(error)
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(row)
            }
        })
    }

    store(req, res) { // Criar Perfil
        const perfil = req.body;
        const sql = `INSERT INTO perfil SET ?;`
        connection.query(sql, perfil, (error, result) => {
            if (error) {
                console.log(error)
                res.status(400).json({ 'erro': error })
            } else {
                res.status(201).json(result)
            }
        })
    }

    update(req, res) { // Atualizar
        const id = req.params.id;
        const perfil = req.body;
        const sql = `UPDATE perfil SET ? WHERE idPerfil=?;`
        connection.query(sql, [perfil, id], (error, result) => {
            if (error) {
                console.log(error)
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

    delete(req, res) { // Deletar
        const id = req.params.id;
        const sql = `DELETE FROM perfil WHERE idPerfil=?;`
        connection.query(sql, id, (error, result) => {
            if (error) {
                console.log(error)
                res.status(404).json({ 'erro': error })
            } else {
                res.status(200).json(result)
            }
        })
    }

}
// Padrão Singleton
export default new PerfilController()