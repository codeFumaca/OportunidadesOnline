import ProcuranteRepositories from "../repositories/ProcuranteRepositories.js"

class ProcuranteController {

    async index(req, res) { // Buscar
        try {
            const result = await ProcuranteRepositories.find()
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }

    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        try {
            const result = await ProcuranteRepositories.findById(id)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }

    }

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        try {
            const result = await ProcuranteRepositories.findByName(nome)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }
    }


    async store(req, res) { // Criar Procurante
        const procurante = req.body;
        try {
            const result = await ProcuranteRepositories.create(procurante)
            res.status(201).json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const procurante = req.body;
        try {
            const result = await ProcuranteRepositories.update(procurante, id)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        try {
            const result = await ProcuranteRepositories.delete(id)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }
    }

}
// Padrão Singleton
export default new ProcuranteController()