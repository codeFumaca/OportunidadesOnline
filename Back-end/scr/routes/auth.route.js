import { Router } from "express";
import { login } from "../app/controllers/auth.controller.js";

const router = Router();

router.post('/', login);

export default router;