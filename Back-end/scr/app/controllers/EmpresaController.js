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

}
// Padrão Singleton
export default new EmpresaController()