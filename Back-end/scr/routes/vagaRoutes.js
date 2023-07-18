import { Router } from "express";
import VagaController from "../app/controllers/VagaController.js";

const router = Router();

// ROTAS PERFIL
// router.post('/register/perfil', PerfilController.store); Desnecessário

router.get('/vagas', VagaController.index);

router.get('/vagas/search/id/:id', VagaController.show);

router.get('/vagas/search/nome/:nome', VagaController.showbyname);

router.put('/vagas/atualizar/:id', VagaController.update);

router.put('/vagas/addprocurante/:id', VagaController.addprocurante);

router.put('/vagas/removeprocurante/:id', VagaController.removeprocurante);

router.delete('/vagas/delete/:id', VagaController.delete);

export default router;