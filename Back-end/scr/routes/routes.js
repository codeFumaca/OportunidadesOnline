import { Router } from "express";
import { join } from 'path';
import { eAdmin } from "../app/middlewares/auth.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//Importando funções
import { sendHtmlFile } from "../app/functions/sendHtmlFile.js";

//Importando arquivos de rotas
import procuranteRoutes from "./procuranteRoutes.js";
import empresaRoutes from "./empresaRoutes.js";
import perfilRoutes from "./perfilRoutes.js"
import projetoRoutes from "./projetoRoutes.js"
import areaRoutes from "./areaRoutes.js"
import profissaoRoutes from "./profissaoRoutes.js"

const router = Router()

// ROTAS UTILIZADAS PARA FAZER REQUISIÇÕES AO SERVIDOR
router.get('/', async (req, res) => { // SOLICITA OS ARQUIVOS DA PÁGINA INICIAL AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.
    const filePath = join('../', 'Front-end', 'index.html');
    sendHtmlFile(res, filePath);
});

router.get('/register', async (req, res) => { // SOLICITA OS ARQUIVOS DA PÁGINA DE REGISTRO AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.
    const filePath = join('../', 'Front-end', 'register.html');
    sendHtmlFile(res, filePath);
});

router.get('/login', async (req, res) => {// SOLICITA OS ARQUIVOS DA PÁGINA DE LOGIN AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.
    const filePath = join('../', 'Front-end', 'login.html');
    sendHtmlFile(res, filePath);
});

router.get('/dashboard', eAdmin, async (req, res) => {// SOLICITA OS ARQUIVOS DA PÁGINA DE DASHBOARD AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.
    const filePath = join('../', 'Front-end', 'dashboard.html');
    sendHtmlFile(res, filePath);
});

// ROTAS AUTH
router.post('/auth/registrar', async (req, res) => {
    const senha = await bcrypt.hash(req.body.senha, 8)

    console.log(senha);
    return res.status(200).json({
        mensagem: "Tudo ok"
    })

})

router.post('/auth/login', async (req, res) => {
    if (req.body.login != "fakecrazzyy@hotmail.com") {
        return res.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha incorreta"
        });
    }

    if (!(await bcrypt.compare(req.body.senha, "$2a$08$hGCtuN8zmNziEPjMhOhsnezC6HVWcPWo0cCyb2vGAdm/CIze7Y4mG"))) {
        return res.status(400).json({
            erro: true,
            mensagem: "Usuário ou senha incorreta"
        });
    }

    var token = jwt.sign({id: 1}, "AISNNS3702050SASNO247249241LKISANPPQ", {
        //expiresIn: 600 // 10 minutos
        expiresIn: '1d'
    })

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token
    })

});

// RESGATANDO TODOS OS ROUTES E ADICIONANDO NO PRINCIPAL PARA SER LIDO PELO APP.JS ( Express )
router.use(procuranteRoutes);
router.use(empresaRoutes);
router.use(perfilRoutes);
router.use(projetoRoutes);
router.use(areaRoutes)
router.use(profissaoRoutes)

export default router;