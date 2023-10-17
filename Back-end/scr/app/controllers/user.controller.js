import { createService, findAllService, findByIdService, deleteByIdService, updateService } from "../services/user.service.js"

export const storeController = async (req, res) => { // Criar Usuário
    try {
        const { name, email, password, telefone, cep } = req.body;

        if (!name || !email || !password || !telefone || !cep) {
            res.status(400).send({ message: 'Preencha todos os campos necessários' })
        }
        const user = await createService(req.body);

        if (!user) {
            res.status(400).send({ message: 'Erro ao criar usuário' })
        }

        res.status(201).send({ message: 'Usuário criado com sucesso', user: { name, email, telefone, cep } }) //Retornar o usuário criado
    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const findAllController = async (req, res) => { // Listar todos os usuários
    try {
        const users = await findAllService();  // Buscar todos os usuários

        if (users.length === 0) {
            return res.status(400).send({ message: 'Nenhum usuário encontrado' })
        }

        res.status(200).send(users);
    } // Retornar todos os usuários
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const findByIdController = async (req, res) => { // Listar usuário por ID 
    try {
        const user = req.user;

        res.status(200).send(user);
    } // Retornar o usuário
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const updateController = async (req, res) => { // Atualizar usuário por ID
    try {
        const id = req.id;

        const { name, email, password, telefone, cep } = req.body;

        if (!name && !email && !password && !telefone && !cep) {
            return res.status(400).send({ message: 'Preencha pelo menos um campo' })
        }

        await updateService(id, email, name, password, telefone, cep);

        res.status(200).send({ message: 'Usuário atualizado com sucesso' });
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}