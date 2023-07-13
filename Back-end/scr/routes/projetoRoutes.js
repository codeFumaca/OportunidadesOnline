import { Router } from "express";
import ProjetoController from "../app/controllers/ProjetoController.js";

const router = Router();

// ROTAS PROJETO
router.post('/register/projeto', ProjetoController.store);

router.get('/projetos', ProjetoController.index);

router.get('/projeto/search/id/:id', ProjetoController.show);

router.get('/projeto/search/nome/:nome', ProjetoController.showbyname);

router.put('/projeto/atualizar/:id', ProjetoController.update);

router.delete('/projeto/delete/:id', ProjetoController.delete);

export default router;