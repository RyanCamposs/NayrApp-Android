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

// Voltar ao menu
function voltarMenu() {
    document.getElementById("formulario").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

