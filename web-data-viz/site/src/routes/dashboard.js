var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarUltimosCadastros", function (req, res) {
    dashboardController.buscarUltimosCadastros(req, res);
});

router.get("/estiloPopular", function (req, res) {
    dashboardController.estiloPopular(req, res);
});

router.get("/cadastradosHoje", function (req, res) {
    dashboardController.cadastradosHoje(req, res); 
});

router.get("/taxaEngajamento", function (req, res) {
    dashboardController.taxaEngajamento(req, res); 
});

module.exports = router;