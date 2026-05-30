var database = require("../database/config")

function enviarQuiz(nomeAlbum, fkUsuario, perfil, sempiternal, amo, survivalHorror, nexGen, thereIsAHell, thatsTheSpirit) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviarQuiz(): ", fkUsuario, nomeAlbum)
    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, fkAlbum, perfil, sempiternal, amo, survivalHorror, nexGen, thereIsAHell, thatsTheSpirit) 
        VALUES (${fkUsuario}, (SELECT id FROM album WHERE titulo = '${nomeAlbum}'), '${perfil}', ${sempiternal}, ${amo}, ${survivalHorror}, ${nexGen}, ${thereIsAHell}, ${thatsTheSpirit});`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};
function buscarAlbum(fkUsuario) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarAlbum(): ", fkUsuario)
    var instrucaoSql = `
          SELECT 
            a.titulo AS album,
            q.perfil,
            m.titulo AS musica
        FROM quiz q JOIN album a ON q.fkAlbum = a.id
        JOIN musica m ON m.fkAlbum = a.id
        AND m.perfil = q.perfil
        WHERE q.fkUsuario = ${fkUsuario}
        ORDER BY q.id DESC
        LIMIT 1;
    `
    console.log("Executando a instrução SQL:s \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};

function compatibilidadeAlbum(fkUsuario) {
    console.log("ACESSEI A DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function compatibilidadeAlbum(): ")
    var instrucaoSql = `
        SELECT a.titulo, q.perfil, q.sempiternal, q.amo, q.survivalHorror, q.thereIsAHell, q.thatsTheSpirit, q.nexGen
        FROM quiz q JOIN album a ON q.fkAlbum = a.id
        WHERE q.fkUsuario = ${fkUsuario} ORDER BY q.id DESC LIMIT 1;
    `
    console.log("Executando a instrução SQL:s \n" + instrucaoSql);
    return database.executar(instrucaoSql);
};


module.exports = {
    enviarQuiz,
    buscarAlbum,
    compatibilidadeAlbum
};