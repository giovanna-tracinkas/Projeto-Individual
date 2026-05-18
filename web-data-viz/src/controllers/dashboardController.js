var dashboardModel = require("../models/dashboardModel");

function enviarQuiz(req, res) {
    var fkAlbum = req.body.fkAlbumServer;
    var fkUsuario = req.body.fkUsuarioServer;

    dashboardModel.enviarQuiz(fkAlbum, fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao enviar resultado do quiz para o banco! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarAlbum(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    dashboardModel.buscarAlbum(fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao enviar resultado do quiz para o banco! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    enviarQuiz,
    buscarAlbum
}