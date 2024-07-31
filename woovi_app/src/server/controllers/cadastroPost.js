import { databaseConnection } from "../database/connection.js";

export const postCadastro = (req, res) => {
  console.log("Hereee", req.body);
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
      "INSERT INTO cadastro (name, email, password, birthday, cpf, rg, cep, address) VALUES (?,?,?,?,?,?,?,?)",
      [nome, email, password, birthday, cpf, rg, cep, address]
    );
    console.log("Cadastro efetuado com sucesso");
    return res
      .status(200)
      .json({ Status: "200", Message: "Cadastro efetuado com sucesso" });
  } catch (error) {
    console.error("Ocorreu um erro ao cadastrar o usuário: ", error);
    return res.status(500).json({ Status: "500", Message: error });
  }
};
