import express from "express";
import { postCadastro } from "../controllers/cadastroPost";

const router = express.Router();

router.post("/Cadastro", postCadastro);

export default router;
