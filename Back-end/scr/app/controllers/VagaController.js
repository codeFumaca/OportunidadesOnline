import VagaRepositories from "../repositories/VagaRepositories.js"

class VagaController {

    async index(req, res) { // Buscar
        try {
            const result = await VagaRepositories.find()
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        const result = await VagaRepositories.findById(id)
        res.json(result)
    }

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        const result = await VagaRepositories.findByName(nome)
        res.json(result)
    }

    async store(req, res) { // Criar Procurante
        const vaga = req.body;
        const result = await VagaRepositories.create(vaga)
        res.json(result)

    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const area = req.body;
        const result = await VagaRepositories.update(area, id)
        res.json(result)
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        const result = await VagaRepositories.delete(id)
        res.json(result)
    }

    async addprocurante(req, res) { // Deletar
        const idvaga = req.params.id;
        const idprocurante = req.body;
        const result = await VagaRepositories.addProcurante(idvaga,idprocurante)
        res.json(result)
    }
    
    async removeprocurante(req, res) { // Deletar
        const id = req.params.id;
        const idprocurante = req.body;
        const result = await VagaRepositories.removeProcurante(id,idprocurante)
        res.json(result)
    }

}
// Padrão Singleton
export default new VagaController()