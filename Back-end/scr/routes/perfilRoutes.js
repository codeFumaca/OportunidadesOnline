import { Router } from "express";
import PerfilController from "../app/controllers/PerfilController.js";

const router = Router();

// ROTAS PERFIL
// router.post('/register/perfil', PerfilController.store); Desnecessário

router.get('/perfis', PerfilController.index);

router.get('/perfis/search/id/:id', PerfilController.show);

router.get('/perfis/search/nome/:nome', PerfilController.showbyname);

router.put('/perfis/atualizar/:id', PerfilController.update);

router.delete('/perfis/delete/:id', PerfilController.delete);

export default router;