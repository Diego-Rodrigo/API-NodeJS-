const fs = require('fs');

const path = require('path');

module.exports = app => { 
    fs
    .readdirSync(__dirname) 
    .filter(file => ((file.indexOf(".")) !== 0 && (file !== "index.js")))        
    .forEach(file => require(path.resolve(__dirname,file))(app)); 
};     

//Ler um diretorio
// filtra arquivos que não comeca com "." e se é "index.js"
// percorre os arquivos e envia para app