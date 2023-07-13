import { Router } from "express";
import ProcuranteController from "../app/controllers/ProcuranteController.js";

const router = Router();

router.post('/register/procurante', ProcuranteController.store);

router.get('/procurantes', ProcuranteController.index);

router.get('/procurantes/search/id/:id', ProcuranteController.show);

router.get('/procurantes/search/nome/:nome', ProcuranteController.showbyname);

router.put('/procurantes/atualizar/:id', ProcuranteController.update);

router.delete('/procurantes/delete/:id', ProcuranteController.delete);

export default router;