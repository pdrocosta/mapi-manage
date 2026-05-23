import { Router } from "express";
import { login, me } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/me", authMiddleware, me);

export default authRouter;
