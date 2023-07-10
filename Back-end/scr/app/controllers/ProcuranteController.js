import ProcuranteRepositories from "../repositories/ProcuranteRepositories.js"

class ProcuranteController {

    async index(req, res) { // Buscar
        const result = await ProcuranteRepositories.find()
        res.json(result)
    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        const result = await ProcuranteRepositories.findById(id)
        res.json(result)
    }

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        const result = await ProcuranteRepositories.findByName(nome)
        res.json(result)
    }

    async store(req, res) { // Criar Procurante
        const procurante = req.body;
        const result = await ProcuranteRepositories.create(procurante)
        res.json(result)

    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const procurante = req.body;
        const result = await ProcuranteRepositories.update(procurante, id)
        res.json(result)
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        const result = await ProcuranteRepositories.delete(id)
        res.json(result)
    }

}
// Padrão Singleton
export default new ProcuranteController()