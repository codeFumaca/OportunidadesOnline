import EmpresaRepositories from "../repositories/EmpresaRepositories.js"

class EmpresaController {

    async index(req, res) { // Buscar
        try {
            const result = await EmpresaRepositories.find()
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }

    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        const result = await EmpresaRepositories.findById(id)
        res.json(result)
    }

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        const result = await EmpresaRepositories.findByName(nome)
        res.json(result)
    }

    async store(req, res) { // Criar Procurante
        const empresa = req.body;
        const result = await EmpresaRepositories.create(empresa)
        res.json(result)

    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const empresa = req.body;
        const result = await EmpresaRepositories.update(empresa, id)
        res.json(result)
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        const result = await EmpresaRepositories.delete(id)
        res.json(result)
    }

    async vincularProject(req, res) {
        try {
            const idEmpresa = req.body.Eid
            const idProjeto = req.body.Pid
            const result = await EmpresaRepositories.vincularProjeto(idEmpresa, idProjeto)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async desvincularProject(req, res) {
        try {
            const idEmpresa = req.body.Eid
            const idProjeto = req.body.Pid
            const result = await EmpresaRepositories.desvincularProjeto(idEmpresa, idProjeto)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async procurarProject(req, res) {
        try {
            const idEmpresa = req.params.id
            const result = await EmpresaRepositories.findProjeto(idEmpresa)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async vincularArea(req, res) {
        const idEmpresa = req.body.Eid
        const idArea = req.body.Aid
        try {
            const result = await EmpresaRepositories.vincularArea(idEmpresa, idArea)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async desvincularArea(req, res) {
        const idEmpresa = req.body.Eid
        const idArea = req.body.Aid
        try {
            const result = await EmpresaRepositories.desvincularProjeto(idEmpresa, idArea)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async procurarArea(req, res) {
        try {
            const idEmpresa = req.params.id
            const result = await EmpresaRepositories.findProjeto(idEmpresa)
            res.json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

}
// Padrão Singleton
export default new EmpresaController()