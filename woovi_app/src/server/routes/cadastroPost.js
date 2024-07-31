import express from "express";
import { postCadastro } from "../controllers/cadastroPost.js";

const router = express.Router();

router.post("/Cadastro", postCadastro);

export default router;
