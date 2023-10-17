import { Router } from "express";

//Importando arquivos de rotas
import userRoutes from "./user.route.js";
import authRoutes from "./auth.route.js";
import newsRoutes from "./news.route.js";
import swaggerRoutes from "./swagger.route.js";

const router = Router()

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/news', newsRoutes);
router.use('/doc', swaggerRoutes);


export default router;