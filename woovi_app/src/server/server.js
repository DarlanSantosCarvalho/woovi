import express from "express";
import cors from "cors";
const app = express();
import { postCadastro } from "./controllers/cadastroPost.js";

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/Cadastro", postCadastro);

app.listen(8080, console.log("Ouvindo na porta 8080"));
