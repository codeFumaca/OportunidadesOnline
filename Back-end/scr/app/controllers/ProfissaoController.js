import ProfissaoRepositories from "../repositories/ProfissaoRepositories.js"

class ProfissaoController { // FALTA ARRUMAR LÓGICA

    async index(req, res) { // Buscar
        try {
            const result = await ProfissaoRepositories.find()
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }

    }

    async show(req, res) { // Buscar por id
        const id = req.params.id
        try {
            const result = await ProfissaoRepositories.findById(id)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }

    }

    async showbyname(req, res) { // Buscar por nome
        const nome = req.params.nome;
        try {
            const result = await ProfissaoRepositories.findByName(nome)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }
    }


    async store(req, res) { // Criar Procurante
        const profissao = req.body;
        try {
            const result = await ProfissaoRepositories.create(profissao)
            res.status(201).json(result)
        } catch (erro) {
            console.log('Message error: ', erro)
            res.status(400).send({ message: erro.message })
        }
    }

    async update(req, res) { // Atualizar
        const id = req.params.id;
        const profissao = req.body;
        try {
            const result = await ProfissaoRepositories.update(profissao, id)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }
    }

    async delete(req, res) { // Deletar
        const id = req.params.id;
        try {
            const result = await ProfissaoRepositories.delete(id)
            res.status(200).json(result)
        } catch (erro) {
            console.log('Message error: ', erro.message)
            res.status(400).send({ message: erro.message })
        }
    }

}
// Padrão Singleton
export default new ProfissaoController()