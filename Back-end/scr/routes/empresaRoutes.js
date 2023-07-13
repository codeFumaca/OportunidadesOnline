import { Router } from "express";
import EmpresaController from "../app/controllers/EmpresaController.js";

const router = Router();

// ROTAS EMPRESA
router.post('/register/empresa', EmpresaController.store);

router.post('/empresa/projeto/link', EmpresaController.vincularProject)

router.post('/empresa/projeto/unlink', EmpresaController.desvincularProject)

router.post('/empresa/area/link', EmpresaController.vincularArea)

router.post('/empresa/area/link', EmpresaController.desvincularArea)

router.get('/empresas', EmpresaController.index);

router.get('/empresas/search/id/:id', EmpresaController.show);

router.get('/empresas/search/nome/:nome', EmpresaController.showbyname);

router.get('/empresas/search/projeto/:id', EmpresaController.procurarProject);

router.get('/empresas/search/area/:id', EmpresaController.procurarProject);

router.put('/empresas/atualizar/:id', EmpresaController.update);

router.delete('/empresas/delete/:id', EmpresaController.delete);

export default router;