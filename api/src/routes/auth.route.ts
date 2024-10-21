import { AuthController } from "@/controllers/auth.controller";
import { validateLogin, validateRegister } from "@/middlewares/validate";
import express from "express";

const authRouter = express.Router();

const authController = new AuthController();

authRouter.post("/register", validateRegister, authController.register);
authRouter.post("/login", validateLogin, authController.login);

export default authRouter;
