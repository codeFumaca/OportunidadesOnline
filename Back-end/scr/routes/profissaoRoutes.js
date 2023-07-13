import { Router } from "express";
import ProfissaoController from "../app/controllers/AreaController.js";

const router = Router(); // FALTA ARRUMAR

// ROTAS PROFISSAO
router.post('/profissao/', ProfissaoController.store);

router.get('/profissao/', ProfissaoController.index);

router.get('/profissao/', ProfissaoController.show);

router.get('/profissao/', ProfissaoController.showbyname);

router.put('/profissao/', ProfissaoController.update);

router.delete('/profissao/', ProfissaoController.delete);

export default router;