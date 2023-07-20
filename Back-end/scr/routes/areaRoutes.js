import { Router } from "express";
import AreaController from "../app/controllers/AreaController.js";

const router = Router();

// ROTAS AREA
router.post('/register/area', AreaController.store);

router.get('/areas', AreaController.index);

router.get('/area/search/id/:id', AreaController.show);

router.get('/area/search/nome/:nome', AreaController.showbyname);

router.put('/area/atualizar/:id', AreaController.update);

router.delete('/area/delete/:id', AreaController.delete);

export default router;