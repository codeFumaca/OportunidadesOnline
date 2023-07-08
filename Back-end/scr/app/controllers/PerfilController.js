import connection from "../database/connect.js"
import perfilRepositories from "../repositories/PerfilRepositories.js";

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

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        const result = await perfilRepositories.findByName(nome)
        res.json(result)
    }

    async store(req, res) { // Criar Perfil
        const perfil = req.body;
        const result = await perfilRepositories.create(perfil)
        res.json(result)

    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const perfil = req.body;
        const result = await perfilRepositories.update(id, perfil)
        res.json(result)
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        const result = await perfilRepositories.delete(id)
        res.json(result)
    }

}
// Padrão Singleton
export default new PerfilController()