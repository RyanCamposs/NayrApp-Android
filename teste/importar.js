const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// Conecta ao banco
const db = new sqlite3.Database('./dados.db');

// Cria tabela e só depois insere os dados
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS profissionais (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT UNIQUE,
    nome TEXT,
    cargo TEXT,
    CPF TEXT
  )`, (err) => {
    if (err) {
      console.error("Erro ao criar tabela:", err.message);
      return;
    }

    // Lê o arquivo JSON
    const ProfData = JSON.parse(fs.readFileSync('profissionais.json', 'utf8'));

    // Prepara o insert
    const stmt = db.prepare(`INSERT OR IGNORE INTO profissionais (codigo, nome, cargo, cpf) VALUES (?, ?, ?, ?)`);

    // Insere cada linha
    ProfData.forEach(profissionais => {
      stmt.run(profissionais.codigo, profissionais.nome, profissionais.cargo, profissionais.cpf, (err) => {
        if (err) console.error(`Erro ao inserir ${profissionais.codigo}: ${err.message}`);
      });
    });

    stmt.finalize(() => {
      console.log('Todos os profissionais foram inseridos com sucesso.');
      db.close();
    });
  });
});
