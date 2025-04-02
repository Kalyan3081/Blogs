import { Router } from "express";
import { authenticateMiddleware } from "../auth/Jwt.js";
import { BlogController } from "../blog/BlogController.js";

const router = Router();
router.use(authenticateMiddleware)

router.post('/create', BlogController)

export default router
