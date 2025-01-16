import express from "express";
import { UserRegister } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.post("/register", UserRegister);

export default userRouter;
