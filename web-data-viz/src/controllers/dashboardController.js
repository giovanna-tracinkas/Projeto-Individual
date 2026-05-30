var dashboardModel = require("../models/dashboardModel");

function enviarQuiz(req, res) {
    var nomeAlbum = req.body.nomeAlbumServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var perfil = req.body.perfilServer;

    var sempiternal = req.body.sempiternalServer;
    var amo = req.body.amoServer;
    var survivalHorror = req.body.survivalHorrorServer;
    var nexGen = req.body.nexGenServer;
    var thereIsAHell = req.body.thereIsAHellServer;
    var thatsTheSpirit = req.body.thatsTheSpiritServer;

    dashboardModel.enviarQuiz(nomeAlbum, fkUsuario, perfil, sempiternal, amo, survivalHorror, nexGen, thereIsAHell, thatsTheSpirit)
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
        console.log("CHEGOU NO CONTROLLER");
}

function buscarAlbum(req, res) {
    var fkUsuario = req.params.fkUsuario;

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

function compatibilidadeAlbum(req, res) {
    var fkUsuario = req.params.fkUsuario;
    dashboardModel.compatibilidadeAlbum(fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar dados do gráfico no banco! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    enviarQuiz,
    buscarAlbum,
    compatibilidadeAlbum
}