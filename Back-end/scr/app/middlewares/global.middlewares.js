import mongoose from "mongoose";
import { findByIdService } from "../services/user.service.js";

const validId = async (req, res, next) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send({ message: 'ID inválido' });
        }
        next();
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const validUser = async (req, res, next) => {
    try {
        const user = await findByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: 'Usuário não encontrado' });
        }

        req.id = user._id;
        req.user = user;

        next();
    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const validNewsPostBody = async (req, res, next ) => {
    try{
        const { tittle, text, banner } = req.body;

        if (!tittle || !text || !banner) {
            return res.status(400).send({ message: 'Preencha todos os campos necessários' });
        }

        next();
        
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

const validNewsPatchBody = async (req, res, next ) => {
    try{
        const { tittle, text, banner } = req.body;

        if (!tittle && !text && !banner) {
            return res.status(400).send({ message: 'Preencha ao menos um campo' });
        }

        next();
        
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

export { validId, validUser, validNewsPostBody, validNewsPatchBody };