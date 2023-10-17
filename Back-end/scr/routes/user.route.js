import { Router } from "express";
import { storeController, findAllController, findByIdController, updateController } from "../app/controllers/user.controller.js";
import { validUser, validId } from "../app/middlewares/global.middlewares.js";

const router = Router();

// ROTAS PROCURANTE
router.post('/',storeController);
router.get('/', findAllController);
router.get('/:id',validId , validUser, findByIdController);
router.patch('/:id',validId , validUser, updateController);


export default router;