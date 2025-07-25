let fileSystemDirectory = null;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Cordova está pronto');
    // Verificar se o plugin cordova-plugin-file está disponível
    if (!window.resolveLocalFileSystemURL || !cordova.file) {
        console.error('Plugin cordova-plugin-file não está carregado');
        alert('Erro: Plugin de arquivo não carregado. Verifique a instalação.');
        return;
    }

    // Tentar definir o diretório de salvamento
    if (cordova.file.externalRootDirectory) {
        fileSystemDirectory = cordova.file.externalRootDirectory + 'Documents/';
        console.log('Diretório definido: externalRootDirectory/Documents = ' + fileSystemDirectory);
    } else if (cordova.file.documentsDirectory) {
        fileSystemDirectory = cordova.file.documentsDirectory;
        console.log('Diretório alternativo definido: documentsDirectory = ' + fileSystemDirectory);
    } else if (cordova.file.dataDirectory) {
        fileSystemDirectory = cordova.file.dataDirectory;
        console.log('Diretório alternativo definido: dataDirectory = ' + fileSystemDirectory);
    } else {
        console.error('Nenhum diretório de arquivo disponível');
        alert('Erro: Nenhum diretório de arquivo disponível no dispositivo.');
    }

    console.log('Diretórios disponíveis:', JSON.stringify(cordova.file));
}

// Alternar tema claro/escuro
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Abrir formulário (Ficha 1 ou Ficha 2)
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
    } else if (tipo === "ficha2") {
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
    } else if (tipo === "ficha3") {
      formTitle.textContent = "Lista de cbo";
        formConteudo.innerHTML = 
        `
        <section class="ficha">
          <div class=campos><h2>Lista de CBO'S</h2></div>

          <div class="campos">
           
          
          
          </div>
    

        </section>
        `
    }
}

// Voltar ao menu
function voltarMenu() {
    document.getElementById("formulario").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

// Gerar PDF
async function gerarPDF() {
    try {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            console.error('jsPDF não está carregado');
            alert('Erro: Biblioteca jsPDF não carregada.');
            return;
        }

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 10;
        let y = 20;

        // Função para adicionar cabeçalho
        const addHeader = () => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            doc.setTextColor(0, 0, 0);
            doc.text(formTitle, pageWidth / 2, 15, { align: 'center' });
            doc.setLineWidth(0.5);
            doc.setDrawColor(100, 100, 100);
            doc.line(margin, 20, pageWidth - margin, 20);
        };

        // Função para adicionar rodapé
        const addFooter = () => {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.text(`Página ${doc.internal.getCurrentPageInfo().pageNumber}`, pageWidth - margin - 10, pageHeight - 10, { align: 'right' });
        };

        // Função para verificar e adicionar nova página
        const checkPageBreak = (requiredHeight) => {
            if (y + requiredHeight > pageHeight) {
                doc.addPage();
                y = 20;
                addHeader();
                addFooter();
            }
        };

        // Função para adicionar tabela de campos
        const addTableSection = (title, fields) => {
            checkPageBreak(30 + fields.length * 10);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.setFillColor(200, 200, 200);
            doc.rect(margin, y, pageWidth - 2 * margin, 8, 'F');
            doc.setTextColor(0, 0, 0);
            doc.text(title, margin + 2, y + 6);
            y += 10;

            doc.setFont('times', 'normal');
            doc.setFontSize(10);
            doc.setDrawColor(100, 100, 100);
            const tableWidth = pageWidth - 2 * margin;
            const labelWidth = tableWidth * 0.4;
            const valueWidth = tableWidth * 0.6;

            fields.forEach(([label, value]) => {
                checkPageBreak(10);
                doc.rect(margin, y, labelWidth, 8);
                doc.rect(margin + labelWidth, y, valueWidth, 8);
                doc.text(label, margin + 2, y + 6);
                doc.text(value?.toString() || '-', margin + labelWidth + 2, y + 6);
                y += 8;
            });
            y += 5;
        };

        // Função para adicionar observações
        const addObservations = (text) => {
            checkPageBreak(30 + (text.length > 0 ? 20 : 10));
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.setFillColor(200, 200, 200);
            doc.rect(margin, y, pageWidth - 2 * margin, 8, 'F');
            doc.setTextColor(0, 0, 0);
            doc.text('OBSERVAÇÕES', margin + 2, y + 6);
            y += 10;

            doc.setFont('times', 'normal');
            doc.setFontSize(10);
            doc.setDrawColor(100, 100, 100);
            const obs = doc.splitTextToSize(text || '-', pageWidth - 2 * margin - 4);
            doc.rect(margin, y, pageWidth - 2 * margin, obs.length * 6 + 4);
            doc.text(obs, margin + 2, y + 6);
            y += obs.length * 6 + 10;
        };

        // Coletar dados do formulário
        const form = document.getElementById("formConteudo");
        const campos = {};
        const inputs = form.querySelectorAll("input, select, textarea");
        const value = inputs.value

        inputs.forEach((el) => {
            let label = el.name;
            const span = el.closest(".campo")?.querySelector("span");
            if (span) {
                label = span.innerText.replace(":", "").trim();
            }
            const valor = el.value || "-";
            campos[label] = valor;
        });

        // Título do PDF
        const formTitle = document.getElementById("formTitle").textContent;
        addHeader();
        addFooter();

        // Seção: Dados do Profissional (apenas para Ficha 1)
        if (formTitle === "Ficha de Cliente") {
            const professionalFields = [
                ['Nome completo', campos['Nome completo']],
                ['CPF', campos['CPF']],
                ['CNS', campos['CNS']],
                ['Nome da Mãe', campos['Nome da Mãe']],
                ['Nome do Pai', campos['Nome do Pai']],
                ['Data de Nascimento', campos['Nascimento']],
                ['Municipio', campos['Municipio']],
                ['UF', campos['UF']],
                ['Telefone', campos['Telefone']],
                ['Email', campos['Email']]
            ];
            addTableSection('DADOS DO PROFISSIONAL', professionalFields);

            // Seção: Dados do Estabelecimento
            const establishmentFields = [
                ['CNES', campos['CNES']],
                ['Nome fantasia do Estabelecimento', campos['Nome fantasia do Estabelecimento']],
                ['CBO/Especialidade', campos['CBO/Especialidade']],
                ['Atend.SUS', campos['Atend.SUS']],
                ['CH Amb.', campos['Amb']],
                ['CH Hosp', campos['Hosp']],
                ['CH Outros', campos['Outros']],
                ['Registro no Conselho de Classe', campos['Registro no Conselho de Classe']],
                ['Órgão Emissor', campos['Órgão Emissor']],
                ['UF', campos['UF Estab']],
                ['Forma de Contratação com o Estabelecimento', campos['Forma de Contratação com o Estabelecimento']],
                ['Forma de Contratação com o Empregador', campos['Forma de Contratação com o Empregador']],
                ['Detalhamento da Forma de Contratação', campos['Detalhamento da Forma de Contratação']],
                ['CNPJ', campos['CNPJ']]
            ]; 
            addTableSection('DADOS DO ESTABELECIMENTO', establishmentFields);

            // Seção: Observações
            addObservations(campos['Observações']);
        } else if (formTitle === "Ficha de Serviço") {   
         
            const professionalFields = [
                ['CNPJ da Empresa', campos['CNPJ da Empresa']],
                ['CNES da Empresa', campos['CNES da Empresa']],
                ['Situação', campos['Situacao']],
                ['Tipo de Estabelecimento', campos['Tipo de Estabelecimento']],
                ['Razão Social', campos['Razão Social']],
                ['Nome Fantasia', campos['Nome Fantasia']],
                ['Logradouro', campos['Logradouro']],
                ['Numero', campos['Numero']],
                ['Bairro', campos['Bairro']],
                ['Municipio', campos['Municipio']]
            ];
            addTableSection('DADOS DO PROFISSIONAL', professionalFields);

            // Seção: Dados do Estabelecimento
            const establishmentFields = [
                ['Diretor da Empresa', campos['Diretor da Empresa']],
                ['Registro Conselho de Classe', campos['Registro Conselho de Classe']],
                ['Numero do Alvara', campos['Numero do Alvara']],
                ['Data de Expedição', campos['Data de Expedição']],
                ['Órgão Expedidor', campos['Órgão Expedidor']],
            ];
            addTableSection('DADOS DO ESTABELECIMENTO', establishmentFields);
        } else if (formTitle === "ficha3")

        // Campo de assinatura
        checkPageBreak(20);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('Assinatura e Carimbo do(a) Responsável:', margin, y);
        doc.setLineWidth(0.5);
        doc.setDrawColor(100, 100, 100);
        doc.line(margin, y + 5, pageWidth - margin, y + 5);
        y += 10;

        // Salvar o PDF
        const fileName = formTitle === "Ficha de Cliente" ? "ficha-cliente.pdf" : "ficha-servico.pdf";
        if (navigator.userAgent.match(/Windows/i)) {
            console.log('Salvando PDF no navegador');
            doc.save(fileName);
        } else if (cordova.platformId === 'android') {
            console.log('Iniciando salvamento do PDF no Android');
            const pdfBlob = doc.output('blob');
            console.log('Tamanho do Blob:', pdfBlob.size);
            if (pdfBlob.size === 0) {
                console.error('Blob do PDF está vazio');
                alert('Erro: O PDF gerado está vazio.');
                return;
            }

            if (!fileSystemDirectory) {
                console.error('Nenhum diretório de arquivo disponível');
                alert('Erro: Nenhum diretório de arquivo disponível. Tente reinstalar o aplicativo.');
                return;
            }

            window.resolveLocalFileSystemURL(
                fileSystemDirectory,
                function (dirEntry) {
                    console.log('Diretório acessado: ' + dirEntry.toURL());
                    dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
                        console.log('Arquivo criado: ' + fileEntry.toURL());
                        console.log('Caminho nativo: ' + fileEntry.toNativeURL());
                        fileEntry.createWriter(function (writer) {
                            writer.onwriteend = function () {
                                console.log('PDF salvo com sucesso: ' + fileEntry.toURL());
                                alert('O seu PDF foi salvo com sucesso: ' + fileName + '\nCaminho: ' + fileEntry.toNativeURL());
                                fileEntry.file(function (file) {
                                    console.log('Arquivo existe. Tamanho: ' + file.size);
                                    if (cordova.plugins && cordova.plugins.fileOpener2) {
                                        cordova.plugins.fileOpener2.open(
                                            fileEntry.toNativeURL(),
                                            'application/pdf',
                                            {
                                                success: function () {
                                                    console.log('PDF aberto com sucesso');
                                                },
                                                error: function (e) {
                                                    console.error('Erro ao abrir PDF: ' + JSON.stringify(e));
                                                    
                                                }
                                            },
                                            true
                                        );
                                    } else {
                                        console.error('Plugin fileOpener2 não está carregado');
                                       
                                    }
                                }, function (error) {
                                    console.error('Erro ao verificar arquivo: ' + error.toString());
                                    alert('Erro ao verificar arquivo: ' + error.toString());
                                });
                            };
                            writer.onerror = function (error) {
                                console.error('Erro ao escrever arquivo: ' + error.toString());
                                alert('Erro ao salvar PDF: ' + error.toString());
                            };
                            writer.write(pdfBlob);
                        },
                        function (error) {
                            console.error('Erro ao criar escritor de arquivo: ' + error.toString());
                            alert('Erro ao criar escritor de arquivo: ' + error.toString());
                        });
                    },
                    function (error) {
                        console.error('Erro ao obter arquivo: ' + error.toString());
                        alert('Erro ao obter arquivo: ' + error.toString());
                    });
                },
                function (error) {
                    console.error('Erro ao acessar diretório: ' + error.toString());
                    alert('Erro ao acessar diretório: ' + error.toString());
                }
            );
        } else {
            console.error('Plataforma não suportada');
            alert('Plataforma não suportada para salvamento de PDF.');
        }
    } catch (e) {
        console.error('Erro geral na geração do PDF: ' + e.toString());
        alert('Erro na geração do PDF: ' + e.toString());
    }
}