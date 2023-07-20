import jwt from "jsonwebtoken"
import { promisify } from "util"

export async function eAdmin(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: para acessar é necessário realizar login A"
        })
    }
    const [, token] = authHeader.split(' ');

    if (!token) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: para acessar é necessário realizar login B"
        })
    }
    
    try {
        const decode = await promisify(jwt.verify)(token, "AISNNS3702050SASNO247249241LKISANPPQ");
        req.userId = decode.id;
    } catch (erro) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: para acessar é necessário realizar login! Token invalido ou vencido"
        })
    }
}