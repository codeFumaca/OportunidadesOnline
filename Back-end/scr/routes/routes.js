import { Router } from "express";
import { join } from 'path';
import ProcuranteController from "../app/controllers/ProcuranteController.js";
import EmpresaController from "../app/controllers/EmpresaController.js";
import PerfilController from "../app/controllers/PerfilController.js"
import ProjetoController from "../app/controllers/ProjetoController.js";
import AreaController from "../app/controllers/AreaController.js";
import { sendHtmlFile } from "../app/functions/sendHtmlFile.js";

const router = Router()

/**
 * 
 * @param {*} res resposta para o requisitor
 * @param {*} filePath PATH do arquivo HTML
 */

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

// ROTAS PROCURANTE
router.post('/register/procurante', ProcuranteController.store);

router.get('/procurantes', ProcuranteController.index);

router.get('/procurantes/search/id/:id', ProcuranteController.show);

router.get('/procurantes/search/nome/:nome', ProcuranteController.showbyname);

router.put('/procurantes/atualizar/:id', ProcuranteController.update);

router.delete('/procurantes/delete/:id', ProcuranteController.delete);

// ROTAS EMPRESA
router.post('/register/empresa', EmpresaController.store);

router.get('/empresas', EmpresaController.index);

router.get('/empresas/search/id/:id', EmpresaController.show);

router.get('/empresas/search/nome/:nome', EmpresaController.showbyname);

router.put('/empresas/atualizar/:id', EmpresaController.update);

router.delete('/empresas/delete/:id', EmpresaController.delete);

// ROTAS PERFIL
router.post('/register/perfil', PerfilController.store);

router.get('/perfis', PerfilController.index);

router.get('/perfis/search/id/:id', PerfilController.show);

router.get('/perfis/search/nome/:nome', PerfilController.showbyname);

router.put('/perfis/atualizar/:id', PerfilController.update);

router.delete('/perfis/delete/:id', PerfilController.delete);

// ROTAS PROJETO
router.post('/register/projeto', ProjetoController.store);

router.post('/projeto/link', AreaController.vincularProject)

router.get('/projetos', ProjetoController.index);

router.get('/projeto/search/id/:id', ProjetoController.show);

router.get('/projeto/search/nome/:nome', ProjetoController.showbyname);

router.put('/projeto/atualizar/:id', ProjetoController.update);

router.delete('/projeto/delete/:id', ProjetoController.delete);

// ROTAS AREA
router.post('/register/area', AreaController.store);

router.post('/area/link/:Eid/:Aid', AreaController.vincularArea)

router.get('/areas', AreaController.index);

router.get('/area/search/id/:id', AreaController.show);

router.get('/area/search/nome/:nome', AreaController.showbyname);

router.put('/area/atualizar/:id', AreaController.update);

router.delete('/area/delete/:id', AreaController.delete);

export default router;