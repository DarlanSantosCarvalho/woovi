import { databaseConnection } from "../database/connection.js";

export const postCadastro = (req, res) => {
  const name = req.name;
  const email = req.email;
  const password = req.password;
  const birthday = req.birthday;
  const cpf = req.cpf;
  const rg = req.rg;
  const cep = req.cep;
  const address = req.address;
  try {
    databaseConnection.query(
      "INSERT INTO cadastro (name, email, password, birthday, cpf, rg, cep, address) VALUES (?,?,?,?,?,?,?,?)",
      [
        "Darlan1712",
        "darlan171201@gmail.com",
        "senhateste",
        "2001-12-17",
        "000.000.000-00",
        "00.000.000-00",
        "00000-000",
        "Rua A, Salvador - Bahia",
      ]
    );
    console.log("Cadastro efetuado com sucesso");
    return res
      .status(200)
      .json({ Status: "200", Message: "Cadastro efetuado com sucesso" });
  } catch (error) {
    console.error("Ocorreu um erro ao cadastrar o usuário: ", error);
    return res
      .status(500)
      .json({ Status: "500", Message: "Erro. Corrija os dados inseridos" });
  }
};
