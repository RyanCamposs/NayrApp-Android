function abrirFormulario(tipo) {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("formulario").classList.remove("hidden");

    const formTitle = document.getElementById("formTitle");
    const formConteudo = document.getElementById("formConteudo");

    formConteudo.innerHTML = "";

    // DESIGN FICHAS NAVEGADOR 
    if (tipo === "ficha1") {
        formTitle.textContent = "Ficha de Cliente";
        formConteudo.innerHTML = `
            <section class="ficha">
                <h2>DADOS DO PROFISSIONAL</h2>
                <div class="linha">
                    <div class="campo">
                        <span>Nome completo:</span>
                        <input type="text" name="Nome completo" required />
                    </div>
                    <div class="campo">
                        <span>CPF:</span>
                        <input type="text" name="CPF" />
                    </div>
                    <div class="campo">
                        <span>CNS:</span>
                        <input type="text" name="CNS" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Nome da Mãe:</span>
                        <input type="text" name="Nome da Mãe" />
                    </div>
                    <div class="campo">
                        <span>Nome do Pai:</span>
                        <input type="text" name="Nome do Pai" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Data de Nascimento:</span>
                        <input type="date" name="Nascimento" />
                    </div>
                    <div class="campo">
                        <span>Municipio:</span>
                        <input type="text" name="Municipio" />
                    </div>
                    <div class="campo">
                        <span>UF:</span>
                        <input type="text" name="UF" maxlength="2" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Telefone:</span>
                        <input type="tel" name="Telefone" />
                    </div>
                    <div class="campo">
                        <span>Email:</span>
                        <input type="email" name="Email" />
                    </div>
                </div>
            </section>
            <section class="ficha">  
                <h2>DADOS DO ESTABELECIMENTO</h2>  
                <div class="linha">
                    <div class="campo">
                        <span>CNES:</span>
                        <input type="text" name="CNES" />
                    </div>
                    <div class="campo">
                        <span>Nome fantasia do Estabelecimento:</span>
                        <input type="text" name="Nome fantasia do Estabelecimento" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>CBO/Especialidade:</span>
                        <input type="text" name="CBO/Especialidade" />
                    </div>
                    <div class="campo">
                        <span>Atend.SUS:</span>
                        <input type="text" name="Atend.SUS" />
                    </div>
                    <div class="campo">
                        <span>CH Amb.:</span>
                        <input type="text" name="Amb" />
                    </div>
                    <div class="campo">
                        <span>CH Hosp:</span>
                        <input type="text" name="Hosp" />
                    </div>
                    <div class="campo">
                        <span>CH Outros:</span>
                        <input type="text" name="Outros" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Registro no Conselho de Classe:</span>
                        <input type="text" name="Registro no Conselho de Classe" />
                    </div>
                    <div class="campo">
                        <span>Órgão Emissor:</span>
                        <input type="text" name="Órgão Emissor" />
                    </div>
                    <div class="campo">
                        <span>UF:</span>
                        <input type="text" name="UF Estab" maxlength="2" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Forma de Contratação com o Estabelecimento:</span>
                        <input type="text" name="Forma de Contratação com o Estabelecimento" />
                    </div>
                    <div class="campo">
                        <span>Forma de Contratação:</span>
                        <input type="text" name="Forma de Contratação com o Empregador" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Detalhamento da Forma de Contratação:</span>
                        <input type="text" name="Detalhamento da Forma de Contratação" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>CNPJ:</span>
                        <input type="text" name="CNPJ"/>
                    </div>
                </div>
            </section>
            <section class="ficha">
                <h2>OBSERVAÇÕES</h2>
                <textarea name="Observações" rows="4" style="width:100%"></textarea>
            </section>
        `;
    } else if (tipo === "ficha31") {
        formTitle.textContent = "Ficha de Serviço";
        formConteudo.innerHTML = `
            <section class="ficha">
                <h2>DADOS DO ESTABELECIMENTO - 1</h2>
                <div class="linha">
                    <div class="campo">
                        <span>CNPJ da Empresa</span>
                        <input type="text" name="CNPJ da Empresa" required />
                    </div>
                    <div class="campo">
                        <span>CNES da Empresa</span>
                        <input type="text" name="CNES da Empresa" required />
                    </div>
                    <div class="campo">
                        <span>Situacao</span>
                          <input type="text" name="Situacao" required />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Tipo de Estabelecimento:</span>
                        <input type="text" name="Tipo de Estabelecimento" required />
                    </div>
                    <div class="campo">
                        <span>Razão Social</span>
                        <input type="text" name="Razão Social" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Nome Fantasia</span>
                        <input type="text" name="Nome Fantasia" />
                    </div>
                    <div class="campo">
                        <span>Logradouro</span>
                        <input type="text" name="Logradouro" />
                    </div>
                    <div class="campo">
                        <span>Numero</span>
                        <input type="text" name="Numero" maxlength="5" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Bairro</span>
                        <input type="tel" name="Bairro" />
                    </div>
                    <div class="campo">
                        <span>Municipio</span>
                        <input type="text" name="Municipio" />
                    </div>
                </div>
            
                <br>
                <h2>DADOS DO ESTABELECIMENTO - 2</h2>  
                <div class="linha">
                    <div class="campo">
                        <span>Diretor da Empresa</span>
                        <input type="text" name="Diretor da Empresa" />
                    </div>
                </div>
                
                
                    <div class="campo">
                        <span>Registro Conselho de Classe</span>
                        <input type="text" name="Registro Conselho de Classe" />
                    </div class="linha">
                    <div>
                    <br>
                    <h2>Vigilância Sanitária</h2>
                    </div>
                    <div class="campo">
                        <span>Numero do Alvara</span>
                        <input type="number" name="Numero do Alvara" />
                    </div>
                    <div class="campo">
                        <span>Data de Expedição</span>
                        <input type="date" name="Data de Expedição" />
                    </div>
                    <div class="campo">
                        <span>Órgão Expedidor</span>
                        <input type="text" name="Órgão Expedidor" />
                    </div>
                  </section
        `;
    }if (tipo === "ficha32") {   
        document.getElementById("btn-copy").classList.add("hidden");
        formTitle.textContent = "Ficha de Profissional Com Equipe";
        formConteudo.innerHTML = `
            <section class="ficha">
                <h2>DADOS DO PROFISSIONAL</h2>
                <div class="linha">
                    <div class="campo">
                        <span>Nome completo:</span>
                        <input type="text" name="Nome completo" required />
                    </div>
                    <div class="campo">
                        <span>CPF:</span>
                        <input type="text" name="CPF" />
                    </div>
                    <div class="campo">
                        <span>CNS:</span>
                        <input type="text" name="CNS" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Nome da Mãe:</span>
                        <input type="text" name="Nome da Mãe" />
                    </div>
                    <div class="campo">
                        <span>Nome do Pai:</span>
                        <input type="text" name="Nome do Pai" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Data de Nascimento:</span>
                        <input type="date" name="Nascimento" />
                    </div>
                    <div class="campo">
                        <span>Municipio:</span>
                        <input type="text" name="Municipio" />
                    </div>
                    <div class="campo">
                        <span>UF:</span>
                        <input type="text" name="UF" maxlength="2" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Telefone:</span>
                        <input type="tel" name="Telefone" />
                    </div>
                    <div class="campo">
                        <span>Email:</span>
                        <input type="email" name="Email" />
                    </div>
                </div>
            </section>
            <section class="ficha">  
                <h2>DADOS DO ESTABELECIMENTO</h2>  
                <div class="linha">
                    <div class="campo">
                        <span>CNES:</span>
                        <input type="text" name="CNES" />
                    </div>
                    <div class="campo">
                        <span>Nome fantasia do Estabelecimento:</span>
                        <input type="text" name="Nome fantasia do Estabelecimento" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>CBO/Especialidade:</span>
                        <input type="text" name="CBO/Especialidade" />
                    </div>
                    <div class="campo">
                        <span>Atend.SUS:</span>
                        <input type="text" name="Atend.SUS" />
                    </div>
                    <div class="campo">
                        <span>CH Amb.:</span>
                        <input type="text" name="Amb" />
                    </div>
                    <div class="campo">
                        <span>CH Hosp:</span>
                        <input type="text" name="Hosp" />
                    </div>
                    <div class="campo">
                        <span>CH Outros:</span>
                        <input type="text" name="Outros" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Registro no Conselho de Classe:</span>
                        <input type="text" name="Registro no Conselho de Classe" />
                    </div>
                    <div class="campo">
                        <span>Órgão Emissor:</span>
                        <input type="text" name="Órgão Emissor" />
                    </div>
                    <div class="campo">
                        <span>UF:</span>
                        <input type="text" name="UF Estab" maxlength="2" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Forma de Contratação com o Estabelecimento:</span>
                        <input type="text" name="Forma de Contratação com o Estabelecimento" />
                    </div>
                    <div class="campo">
                        <span>Forma de Contratação:</span>
                        <input type="text" name="Forma de Contratação com o Empregador" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Detalhamento da Forma de Contratação:</span>
                        <input type="text" name="Detalhamento da Forma de Contratação" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>CNPJ:</span>
                        <input type="text" name="CNPJ"/>
                    </div>
                </div>
            </section>

            <section class="ficha"> 
                <div class="linha">
                    <div class="campo">
                        <span>INE da Equipe</span>
                        <input type="text" name="INE da Equipe"/>
                    </div>
                    <div class="campo">
                        <span>Tipificação da Equipe</span>
                        <input type="text" name="Tipificação da Equipe"/>
                    </div>
                    </div>
                    <div class="linha">
                        <div class="campo"> 
                            <span>Pertencente a equipe minima?</span>
                            <input type="text" name="Pertencente a equipe minima?"/>
                        </div>    
                </div>
            </section>
            <section class="ficha">
                <h2>OBSERVAÇÕES</h2>
                <textarea name="Observações" rows="4" style="width:100%"></textarea>
            </section> 
        `

    }else if (tipo === "listacbo") {
        document.getElementById("btn-remove").classList.add("hidden");
        document.getElementById("btn-copy").classList.remove("hidden");
        formTitle.textContent = "Lista de CBO";
        formConteudo.innerHTML = `
          <section class="ficha">
             <h2>Procure seu CBO</h2>
        <div class="linha">
            <div class="campo" style="width:100%">
            <input id="cboSearch" type="text" placeholder="Digite parte da ocupação ou código" autofocus />
            </div>
        </div>
        <ul id="cboResults" class="cbo-results"></ul>
        </section>
    `;

    // carrega o json
    fetch('cbo.json')
        .then(res => res.json()) // procura resposta no json
        .then(cbos => {
        const input = document.getElementById('cboSearch');
        const results = document.getElementById('cboResults');

        input.addEventListener('input', () => {
            const term = input.value.trim().toLowerCase();
            results.innerHTML = '';
            if (!term) return;

            // filtra por código ou por nome
            const matches = cbos.filter(item =>
            item.codigo.includes(term) || item.nome.toLowerCase().includes(term)
            ).slice(0, 15); // limita a 20 resultados

            matches.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} — ${item.codigo}`;
            li.onclick = () => {
                input.value = `${item.nome} - ${item.codigo}` ;
                results.innerHTML = '';
            };

            // Evento para copiar o cbo (botão)     
            let btn = document.getElementById("btn-copy");
            btn.addEventListener('click', function() {
            navigator.clipboard.writeText(input.value);                   
            });
            

            results.appendChild(li);
       
            });
        });
        })
        .catch(err => {
        console.error('Erro ao carregar lista de CBO', err);
        formConteudo.innerHTML += `<p style="color:red">Não foi possível carregar a lista de CBO.</p>`;
        });
    }if (tipo === "futuro") {
        document.getElementById("btn-remove").classList.remove("hidden");
        document.getElementById("btn-copy").classList.add("hidden");
        formTitle.textContent = "Lista de CBO";
        formConteudo.innerHTML = `
        <section class="ficha">
            <h1>Página em construção</h1>

        </section>
        `
    }
    }



    //  let btn = document.getElementById("btn-copy");
    //             btn.addEventListener('click', function() {
    //                 navigator.clipboard.writeText(input.value);