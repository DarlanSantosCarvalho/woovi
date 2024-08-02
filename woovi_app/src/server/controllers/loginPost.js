import { databaseConnection } from "../database/connection.js";
import bcrypt from "bcrypt";

export const loginCadastro = (req, res) => {
  const cpf = req.body.cpf;
  const password = req.body.password;

  try {
    databaseConnection.query(
      "SELECT * FROM cadastro WHERE cpf = ? AND password = ?",
      [cpf],
      (error, result) => {
        if (error) {
          return res.status(400).json({ Message: "Erro ao fazer Login" });
        } else if (result.length > 0) {
          const user = result[0];
          bcrypt.compare(user.password, password, (err, passwordMatch) => {
            if (err) {
              return res.status(400).json({ Message: "Senha incorreta" });
            } else if (passwordMatch) {
              return res.status(200).json({ Message: "Login efetuado" });
            }
          });
        }
      }
    );
    if (res.length > 0) {
      console.log("Login efetuado");
    } else {
      console.log("Login não efetuado");
    }
  } catch (error) {}
};
