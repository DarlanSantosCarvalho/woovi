import mysql from "mysql2";

export const databaseConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "210618",
  database: "bank",
});
