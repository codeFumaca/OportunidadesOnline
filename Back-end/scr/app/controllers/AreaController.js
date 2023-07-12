import AreaRepositories from "../repositories/AreaRepositories.js"

class AreaController {

    async index(req, res) { // Buscar
        try {
            const result = await AreaRepositories.find()
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }

    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        const result = await AreaRepositories.findById(id)
        res.json(result)
    }

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        const result = await AreaRepositories.findByName(nome)
        res.json(result)
    }

    async store(req, res) { // Criar Procurante
        const area = req.body;
        const result = await AreaRepositories.create(area)
        res.json(result)

    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const area = req.body;
        const result = await AreaRepositories.update(area, id)
        res.json(result)
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        const result = await AreaRepositories.delete(id)
        res.json(result)
    }

    async vincularProject(req, res) {
        try {
            const idEmpresa = req.body.Eid
            const idProjeto = req.body.Pid
            const result = await AreaRepositories.vincularProjeto(idEmpresa, idProjeto)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async vincularArea(req, res) {
        const idEmpresa = req.params.Eid
        const idArea = req.params.Aid
        try {
            const result = await AreaRepositories.vincularProjeto(idEmpresa, idArea)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

}
// Padrão Singleton
export default new AreaController()