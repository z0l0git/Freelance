import { connectDb } from "./db";

import express from "express";
import cors from "cors";
import { CategoryRouter, UserRouter } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(CategoryRouter);
app.use(UserRouter);

connectDb();

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
