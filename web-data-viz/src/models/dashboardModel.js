var database = require("../database/config")

function enviarQuiz(fkUsuario, fkAlbum) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarQuiz(): ", fkUsuario, fkAlbum)
    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, fkAlbum) VALUES (${fkUsuario}, ${fkAlbum})`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function buscarAlbum(fkUsuario) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarAlbum(): ", fkUsuario)
    var instrucaoSql = `
        SELECT a.titulo FROM album a 
        JOIN quiz q ON q.fkAlbum = a.id 
        WHERE q.fkUsuario = ${fkUsuario}`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};


module.exports = {
    enviarQuiz,
    buscarAlbum
};