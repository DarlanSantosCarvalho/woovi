import express from "express";
import { loginCadastro } from "../controllers/loginPost.js";

const router = express.Router();

router.post("/Login", loginCadastro);

export default router;
