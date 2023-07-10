import ProjetoRepositories from "../repositories/ProjetoRepositories.js"

class ProjetoController {

    async index(req, res) { // Buscar
        const result = await ProjetoRepositories.find()
        res.json(result)
    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        const result = await ProjetoRepositories.findById(id)
        res.json(result)
    }

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        const result = await ProjetoRepositories.findByName(nome)
        res.json(result)
    }

    async store(req, res) { // Criar Procurante
        const projeto = req.body;
        const result = await ProjetoRepositories.create(projeto)
        res.json(result)

    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const procurante = req.body;
        const result = await ProjetoRepositories.update(procurante, id)
        res.json(result)
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        const result = await ProjetoRepositories.delete(id)
        res.json(result)
    }

}
// Padrão Singleton
export default new ProjetoController()