import { Router } from "express";
import { createController, findAllController, topNewsController, findByIDController, findByTitleController, findByUserController, updateController, deleteController, likeNewsController, addCommentController, deleteCommentController } from "../app/controllers/news.controller.js";

import { authMiddleware } from "../app/middlewares/auth.middleware.js";
import { validNewsPostBody, validNewsPatchBody } from "../app/middlewares/global.middlewares.js";

const router = Router();

// ROTAS PROCURANTE
router.post('/', authMiddleware, validNewsPostBody, createController);
router.get('/',  findAllController);
router.get('/top', topNewsController);
router.get('/search',authMiddleware , findByTitleController);
router.get('/byuser',authMiddleware ,findByUserController);

router.get('/:id',authMiddleware , findByIDController);
router.patch('/:id',authMiddleware ,validNewsPatchBody , updateController);
router.delete('/:id',authMiddleware , deleteController);
router.patch('/like/:id',authMiddleware , likeNewsController);
router.patch('/comment/:id',authMiddleware , addCommentController);
router.patch('/comment/:idNews/:idComment',authMiddleware , deleteCommentController);

export default router;