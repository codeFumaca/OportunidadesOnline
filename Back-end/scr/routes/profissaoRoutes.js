import { Router } from "express";
import ProfissaoController from "../app/controllers/ProfissaoController.js";

const router = Router(); // FALTA ARRUMAR

// ROTAS PROFISSAO
router.post('/register/profissao/', ProfissaoController.store);

router.get('/profissoes', ProfissaoController.index);

router.get('/profissao/search/id/:id', ProfissaoController.show);

router.get('/profissao/search/nome/:nome', ProfissaoController.showbyname);

router.put('/profissao/atualizar/:id', ProfissaoController.update);

router.delete('/profissao/delete/:id', ProfissaoController.delete);

export default router;