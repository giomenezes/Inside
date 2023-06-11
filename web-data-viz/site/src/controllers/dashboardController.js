var dashboardModel = require("../models/dashboardModel");

function buscarUltimosCadastros(req, res) {
    dashboardModel.buscarUltimosCadastros().then(resposta => {
        if (resposta.length > 0) {
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado.")
        }
    }).catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function estiloPopular(req, res) {
    dashboardModel.estiloPopular().then(resposta => {
        if (resposta.length > 0) {
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado.")
        }
    }).catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastradosHoje(req, res) {
    dashboardModel.cadastradosHoje().then(resposta => {
        if (resposta.length > 0) {
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado.")
        }
    }).catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function taxaEngajamento(req, res) {
    dashboardModel.taxaEngajamento().then(resposta => {
        if (resposta.length > 0) {
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado.")
        }
    }).catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosCadastros,
    estiloPopular,
    cadastradosHoje,
    taxaEngajamento
};