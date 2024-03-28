import { connectDb } from "./db";

import express from "express";
import cors from "cors";
import { CategoryRouter } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(CategoryRouter);

connectDb();

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
