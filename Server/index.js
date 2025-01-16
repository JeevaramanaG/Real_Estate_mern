import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./router/user.router.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB:", e);
  });

app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port 3000...");
});
