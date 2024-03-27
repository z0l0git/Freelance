import { connectDb } from "./db";

import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
connectDb();

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
