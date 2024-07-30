import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.listen(8080, console.log("Ouvindo na porta 8080"));
