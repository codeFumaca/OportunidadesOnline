import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { findByIdService } from '../services/user.service.js';

dotenv.config();

export const authMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).send({ message: 'Token não informado' });
        }

        const parts = authorization.split(' ');
        const [scheme, token] = parts;

        if (scheme !== 'Bearer') {
            return res.status(401).send({ message: 'Token mal formatado' });
        }

        jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Token inválido' });

            }

            const user = await findByIdService(decoded.id);

            if (!user || !user._id) {
                return res.status(401).send({ message: 'Usuário não encontrado' });
            }

            req.UserId = user._id;
            return next();
        });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}