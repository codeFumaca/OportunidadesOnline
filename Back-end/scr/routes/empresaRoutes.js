import { Router } from "express";
import EmpresaController from "../app/controllers/EmpresaController.js";

const router = Router();

// ROTAS EMPRESA
router.post('/register/empresa', EmpresaController.store);

router.post('/projeto/link', EmpresaController.vincularProject)

router.post('/projeto/unlink', EmpresaController.desvincularProject)

router.post('/area/link/:Eid/:Aid', EmpresaController.vincularArea)

router.get('/empresas', EmpresaController.index);

router.get('/empresas/search/id/:id', EmpresaController.show);

router.get('/empresas/search/nome/:nome', EmpresaController.showbyname);

router.get('/empresas/search/projeto/:id', EmpresaController.procurarProject);

router.put('/empresas/atualizar/:id', EmpresaController.update);

router.delete('/empresas/delete/:id', EmpresaController.delete);

export default router;