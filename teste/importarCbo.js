const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// Conecta ao banco
const db = new sqlite3.Database('./dados.db');

// Cria tabela e só depois insere os dados
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS cbo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT UNIQUE,
    nome TEXT
  )`, (err) => {
    if (err) {
      console.error("Erro ao criar tabela:", err.message);
      return;
    }

    // Lê o arquivo JSON
    const cboData = JSON.parse(fs.readFileSync('cbo.json', 'utf8'));

    // Prepara o insert
    const stmt = db.prepare(`INSERT OR IGNORE INTO cbo (codigo, nome) VALUES (?, ?)`);

    // Insere cada linha
    cboData.forEach(cbo => {
      stmt.run(cbo.codigo, cbo.nome, (err) => {
        if (err) console.error(`Erro ao inserir ${cbo.codigo}: ${err.message}`);
      });
    });

    stmt.finalize(() => {
      console.log('Todos os CBOs foram inseridos com sucesso.');
      db.close();
    });
  });
});
