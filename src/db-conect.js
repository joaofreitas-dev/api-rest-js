// Importando a biblioteca Pool
const { Pool } = require("pg");

// Criando a classe de configuração da conexão
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456",
  database: "autenticacao_criptografia",
});

module.exports = pool;
