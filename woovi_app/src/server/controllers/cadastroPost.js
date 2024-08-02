import { databaseConnection } from "../database/connection.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const postCadastro = (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const password = req.body.password;
  const birthday = req.body.birthday;
  const cpf = req.body.cpf;
  const rg = req.body.rg;
  const cep = req.body.cep;
  const address = req.body.address;

  try {
    databaseConnection.query(
      "SELECT email, cpf, rg FROM cadastro WHERE email = ? OR cpf = ? OR rg = ?",
      [email, cpf, rg],
      (error, result) => {
        if (error) {
          console.error(
            "Ocorreu um erro ao verificar dados duplicados: ",
            error
          );
          return res.status(500).json({ Status: "500", Message: error });
        } else {
          if (result.length > 0) {
            return res.status(400).json({
              Status: "400",
              Message: "Usuário já cadastrado.",
            });
          } else {
            bcrypt.hash(password, saltRounds, function (passwordHashed) {
              databaseConnection.query(
                "INSERT INTO cadastro (name, email, password, birthday, cpf, rg, cep, address) VALUES (?,?,?,?,?,?,?,?)",
                [nome, email, passwordHashed, birthday, cpf, rg, cep, address]
              );
            });
            console.log("Cadastro efetuado com sucesso");
            return res.status(200).json({
              Status: "200",
              Message: "Cadastro efetuado com sucesso",
            });
          }
        }
      }
    );
  } catch (error) {
    console.error("Ocorreu um erro ao cadastrar o usuário: ", error);
    return res.status(500).json({ Status: "500", Message: error });
  }
};
