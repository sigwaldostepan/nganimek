import { UserController } from "@/controllers/user.controller";
import { deserializeUser } from "@/middlewares/deserializeUser";
import express from "express";

const userRouter = express.Router();

const userController = new UserController();

userRouter.get("/", deserializeUser, userController.getProfile);

export default userRouter;
