import { connectDb } from "./db";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {
  CategoryRouter,
  EducationRouter,
  UserRouter,
  WorkExperienceRouter,
} from "./routes";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(CategoryRouter);
app.use(UserRouter);
app.use(EducationRouter);
app.use(WorkExperienceRouter);

connectDb();

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
