import { databaseConnection } from "../database/connection.js";
import bcrypt from "bcrypt";

export const loginCadastro = (req, res) => {
  const cpf = req.body.cpf;
  const password = req.body.password;

  try {
    databaseConnection.query(
      "SELECT cpf, password FROM cadastro WHERE cpf = ?",
      [cpf],
      (error, result) => {
        if (error) {
          console.log(error);
          return res.status(400).json({ Message: "Erro ao fazer Login" });
        } else if (result.length > 0) {
          const user = result[0];
          bcrypt.compare(password, user.password, (err, passwordMatch) => {
            if (err) {
              return res
                .status(400)
                .json({ Message: "Erro ao comparar senha" });
            } else if (passwordMatch) {
              return res.json({ Status: "200", Message: "Login efetuado" });
            } else {
              return res.json({ Status: "400", Message: "Senha incorreta" });
            }
          });
        } else {
          return res.status(400).json({ Message: "Usuário não encontrado" });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Erro no servidor" });
  }
};
