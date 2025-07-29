const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const db = new sqlite3.Database('./dados.db');

app.use(bodyParser.urlencoded({ extended: true }));

// Página com busca, formulário e lista de CBOs
app.get('/cbos', (req, res) => {
  const busca = req.query.busca || '';
  const termoBusca = `%${busca}%`;

  const sql = `
    SELECT * FROM cbo
    WHERE codigo LIKE ? OR nome LIKE ?
    ORDER BY codigo
  `;

  db.all(sql, [termoBusca, termoBusca], (err, rows) => {
    if (err) {
      return res.status(500).send("Erro ao buscar CBOs: " + err.message);
    }

    let html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Lista de CBOs</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { text-align: center; }
          form { margin-top: 20px; }
          input[type="text"] { padding: 5px; margin-right: 10px; }
          button { padding: 6px 12px; }
          table { border-collapse: collapse; width: 100%; margin-top: 20px; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Lista de CBOs</h1>

        <form method="GET" action="/cbos">
          <input type="text" name="busca" placeholder="Buscar por código ou nome" value="${busca}">
          <button type="submit">Buscar</button>
        </form>

        <form method="POST" action="/adicionar-cbo" style="margin-top: 20px;">
          <label>Código:</label>
          <input type="text" name="codigo" required>
          <label>Nome:</label>
          <input type="text" name="nome" required>
          <button type="submit">Adicionar CBO</button>
        </form>

        <table>
          <tr><th>Código</th><th>Nome</th></tr>`;

    rows.forEach(row => {
      html += `<tr><td>${row.codigo}</td><td>${row.nome}</td></tr>`;
    });

    html += `
        </table>
      </body>
      </html>
    `;

    res.send(html);
  });
});

// Inserção de novo CBO
app.post('/adicionar-cbo', (req, res) => {
  const { codigo, nome } = req.body;

  if (!codigo || !nome) {
    return res.status(400).send('Campos obrigatórios não preenchidos.');
  }

  db.run('INSERT OR IGNORE INTO cbo (codigo, nome) VALUES (?, ?)', [codigo, nome], function (err) {
    if (err) {
      return res.status(500).send("Erro ao inserir CBO: " + err.message);
    }

    res.redirect('/cbos');
  });
});

// Inicializa servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/cbos');
});
