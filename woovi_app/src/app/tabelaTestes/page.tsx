import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  id: number,
  teste: string,
  sistema: string,
  desenvolvedor: string,
  versao: number,
  descricaoErro: string
) {
  return { id, teste, sistema, desenvolvedor, versao, descricaoErro };
}

const rows = [
  createData(
    1,
    "Login sistema de Licitação - Base de Valente",
    "Licitação",
    "Fulano da Silva",
    3.1,
    "O sistema não permite o Login mesmo com usuário e senha corretos"
  ),
  createData(
    1,
    "Login sistema de Licitação - Base de Valente",
    "Licitação",
    "Fulano da Silva",
    3.1,
    "O sistema não permite o Login mesmo com usuário e senha corretos"
  ),
  createData(
    1,
    "Login sistema de Licitação - Base de Valente",
    "Licitação",
    "Fulano da Silva",
    3.1,
    "O sistema não permite o Login mesmo com usuário e senha corretos"
  ),
  createData(
    1,
    "Login sistema de Licitação - Base de Valente",
    "Licitação",
    "Fulano da Silva",
    3.1,
    "O sistema não permite o Login mesmo com usuário e senha corretos"
  ),
  createData(
    1,
    "Login sistema de Licitação - Base de Valente",
    "Licitação",
    "Fulano da Silva",
    3.1,
    "O sistema não permite o Login mesmo com usuário e senha corretos"
  ),
  createData(
    1,
    "Login sistema de Licitação - Base de Valente",
    "Licitação",
    "Fulano da Silva",
    3.1,
    "O sistema não permite o Login mesmo com usuário e senha corretos"
  ),
  createData(
    1,
    "Login sistema de Licitação - Base de Valente",
    "Licitação",
    "Fulano da Silva",
    3.1,
    "O sistema não permite o Login mesmo com usuário e senha corretos"
  ),
];

export default function TabelaTeste() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Teste</TableCell>
            <TableCell align="right">Sistema</TableCell>
            <TableCell align="right">Desenvolvedor</TableCell>
            <TableCell align="right">Versão</TableCell>
            <TableCell align="center">Descrição do erro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.teste}
              </TableCell>
              <TableCell align="right">{row.sistema}</TableCell>
              <TableCell align="right">{row.desenvolvedor}</TableCell>
              <TableCell align="right">{row.versao}</TableCell>
              <TableCell align="right">{row.descricaoErro}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
