var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função enviarQuiz de dashboardController.js
router.post("/enviarQuiz", function (req, res) {
    dashboardController.enviarQuiz(req, res);
})

router.get("/buscarAlbum", function (req, res) {
    dashboardController.buscarAlbum(req, res);
})


module.exports = router;