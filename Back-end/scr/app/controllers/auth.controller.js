import { loginService, generateToken } from "../services/login.service.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await loginService(email);

        if (!user) {
            return res.status(404).send({ message: 'EMAIL ou Senha incorretos' });
        }

        const passwordisValid = bcrypt.compareSync(password, user.password); // Compara a senha digitada com a senha criptografada no banco de dados

        if (!passwordisValid || !user) {
            return res.status(404).send({ message: 'Email ou SENHA incorretos' }); // 
        }

        const token = generateToken(user.id);

        res.send({token});
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export { login };

