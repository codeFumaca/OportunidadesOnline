import { Router } from "express";
import { join } from 'path';

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

router.get('/dashboard', async (req, res) => {// SOLICITA OS ARQUIVOS DA PÁGINA DE DASHBOARD AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.
    const filePath = join('../', 'Front-end', 'dashboard.html');
    sendHtmlFile(res, filePath);
});

// RESGATANDO TODOS OS ROUTES E ADICIONANDO NO PRINCIPAL PARA SER LIDO PELO APP.JS ( Express )
router.use(procuranteRoutes);
router.use(empresaRoutes);
router.use(perfilRoutes);
router.use(projetoRoutes);
router.use(areaRoutes)
router.use(profissaoRoutes)

export default router;