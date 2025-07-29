const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const db = new sqlite3.Database('./dados.db');

app.use(bodyParser.urlencoded({ extended: true }));

// Página com busca, formulário e lista de CBOs
app.get('/profissionais', (req, res) => {
  const busca = req.query.busca || '';
  const termoBusca = `%${busca}%`;

  const sql = `
    SELECT * FROM profissionais
    WHERE codigo LIKE ? OR nome LIKE ?
    ORDER BY codigo
  `;

  db.all(sql, [termoBusca, termoBusca], (err, rows) => {
    if (err) {
      return res.status(500).send("Erro ao buscar profissionais: " + err.message);
    }

    let html = `
      <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Formularios do CNES</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="shortcut icon" href="img/logo.png" type="image/x-icon">
  <style>
    :root {
  --bg: #ffffff;
  --fg: #111111;
  --primary: #052caf;
}

body.dark {
  --bg: #121212;
  --fg: #f5f5f5;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: var(--bg);
  color: var(--fg);
  transition: background 0.3s, color 0.3s;
  text-align: center;
}
th {
text-align: center;
}

header {
  background: var(--primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

h1 {
  margin: 0;
  font-size: 1.4rem;
}

#themeToggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

main {
  padding: 1rem;
}

.fichas {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

button {
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--primary);
  color: #fff;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #8f1818;
}

.hidden {
  display: none;
}

/* Estilo das fichas */
.ficha {
  border: 1px solid #cccccc;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: #fdfdfd;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
}



.ficha h2 {
  margin-top: 0;
  font-size: 1rem;
  text-transform: uppercase;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.4rem;
  color: #333;
}

.hidden {
    display: none;
}
.ficha {
    margin-bottom: 20px;
}
.linha {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.campo {
    flex: 1;
    min-width: 200px;
}
.campo span {
    display: block;
    margin-bottom: 5px;
}
.campo input, .campo select, .campo textarea {
    width: 100%;
    padding: 5px;
}


.linha {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.campo {
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
}

.campo span {
  font-size: 0.9rem;
  margin-bottom: 4px;
  color: #555;
}

.campo input {
  border: none;
  border-bottom: 1px solid #999;
  background: transparent;
  padding: 6px 4px;
  font-size: 1rem;
  color: var(--fg);
}

.campo input:focus {
  outline: none;
  border-bottom: 2px solid var(--primary);
}
.cbo-results {
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.cbo-results li {
  padding: 8px;
  cursor: pointer;
}
.cbo-results li:hover {
  background: #f0f0f0;
}
textarea {
  border: 1px solid #fdfdfd;
  border-radius: 6px;
  font-size: 1rem;
  padding: 8px;
  resize: vertical;
  font-family: Arial, sans-serif;
  background-color: transparent;
  color: var(--fg);
}

textarea:focus {
  border-color: var(--primary);
  outline: none;
}

/* Botões do formulário */
.form-buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* PARTE DO RODAPÉ */
footer {
  background-color: #ffffff;
  width: 100%;
  background-color: var(--primary);
  color: white;
  
}

.box-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 17px;
}

.box1 {
  width: 30%;
  padding: 5rem
}

.box2 {
  width: 30%;
  padding: 5rem;
}

.div-box {
  text-align: center;
}

.div-box a{
  text-decoration: none;
  list-style: none;
  color: rgb(255, 0, 0);
  word-break: normal;
}

.div-box a:hover {
  font-size:18px;
}


li {
  list-style: none;
}




@media (max-width: 600px) {
  .linha {
    flex-direction: column;
  }

  .campo {
    min-width: 100%;
  }

  button {
    width: 100%;
  }

  footer {
    max-width:100%;
  }
}

  </style>

</head>
<body>
  <header>
    <h1>Formulários do CNES</h1>
    <button id="themeToggle">🌙</button>
  </header>

  <main>
    <section id="menu">
      <h2>Escolha uma ficha:</h2>
      <div class="fichas">
        <button onclick="abrirFormulario('ficha1')">Ficha 1 - Módulo Básico [Empresa]</button>
        <button onclick="abrirFormulario('ficha31')">Ficha 31 - Profissional [Sem Equipe]</button>
        <button onclick="abrirFormulario('ficha32')">Ficha 32 - Profissional [Com Equipe]</button>
        <button onclick="abrirFormulario('ficha16')">Ficha 16 - Equipamentos</button>
        
        <h2>Outros Aquivos:</h3>
        <button onclick="abrirFormulario('listacbo')" >Lista de CBO's</button>
        <button onclick="abrirFormulario('futuro')" >Tabela de Formas de Contratação</button>
      </div>
    </section>

    

    </section>

    <section id="formulario" class="hidden">
      <h2 id="formTitle">Formulário</h2>
      <form id="formConteudo"></form>
      <div class="form-buttons">
        <button onclick="voltarMenu()">Voltar</button>
        <button onclick="gerarPDF()" id="btn-remove">Gerar PDF</button>
        <button class="hidden" id="btn-copy">Copiar CBO</button>
      </div>
    </section>
  </main>
  
 

   <form method="GET" action="/profissionais">
          <input type="text" name="busca" placeholder="Buscar por código ou nome" value="${busca}">
          <button type="submit">Buscar</button>
        </form>

        <form method="POST" action="/adicionar-profissionais" style="margin-top: 20px;">
          <label>Código:</label>
          <input type="text" name="codigo" required>
          <label>Nome:</label>
          <input type="text" name="nome" required>
          <label>Cargo:</label>
          <input type="text" name="cargo" required>
          <label>CPF:</label>
          <input type="text" name="cpf" required>

          <button type="submit">Cadastrar Profissional</button>
          
        </form>

        <table>
          <tr><th>Código</th><th>Nome</th><th>Cargo</th><th>CPF</th></tr>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"></script>
    <script src="script.js"></script>
    <script src="cordova.js"></script>
    <script src="theme.js"></script>
    <script src="./forms/forms.js"></script>
    <script src="pdf-generator.js"></script>
    <script src="./teste/server.js"></script>
</body>
</html>


       `;

    rows.forEach(row => {
      html += `<tr><td>${row.codigo}</td><td>${row.nome}</td><td>${row.cargo}</td><td>${row.cpf}</td></tr>`;
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
app.post('/adicionar-profissionais', (req, res) => {
  const { codigo, nome, cargo, cpf } = req.body;

  if (!codigo || !nome || !cargo || !cpf) {
    return res.status(400).send('Campos obrigatórios não preenchidos.');
  }

  db.run('INSERT OR IGNORE INTO profissionais (codigo, nome, cargo, cpf) VALUES (?, ?, ?, ?)', [codigo, nome, cargo, cpf], function (err) {
    if (err) {
      return res.status(500).send("Erro ao inserir profissional: " + err.message);
    }

    res.redirect('/profissionais');
  });
});

// Inicializa servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/profissionais');
});
