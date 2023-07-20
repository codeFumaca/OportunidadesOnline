import { Router } from "express";
import ProcuranteController from "../app/controllers/ProcuranteController.js";

const router = Router();

// ROTAS PROCURANTE
router.post('/register/procurante', ProcuranteController.store);

router.post('/procurante/profissao/link', ProcuranteController.vincularProfissao)

router.post('/procurante/profissao/unlink', ProcuranteController.desvincularProfissao)

router.get('/procurantes', ProcuranteController.index);

router.get('/procurantes/search/id/:id', ProcuranteController.show);

router.get('/procurantes/search/nome/:nome', ProcuranteController.showbyname);

router.put('/procurantes/atualizar/:id', ProcuranteController.update);

router.delete('/procurantes/delete/:id', ProcuranteController.delete);

router.delete('/procurantes/search/profissao/:id', ProcuranteController.desvincularProfissao);

export default router;