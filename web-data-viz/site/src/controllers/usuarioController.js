var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var nick = req.body.nickServer;
    var senha = req.body.senhaServer;

    if (nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(nick, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Nick e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nick = req.body.nickServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefoneCel = req.body.telCelularServer;
    var telefoneFixo = req.body.telFixoServer;

    // Validações dos valores
    if (nick == undefined) {
        res.status(400).send("Seu nickname está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefoneCel == undefined) {
        res.status(400).send("Seu telefone celular está undefined!");
    } else {

        // Passando os valores como parâmetro
        usuarioModel.cadastrar(nick, nome, email, senha, telefoneCel, telefoneFixo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\Houve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function torneio(req, res) {
    var url = req.body.url;
    var nickname = req.body.nickname;
    var tipo = req.body.tipo;

    if (url == undefined) {
        res.status(500).send("URL não existe.");
    } else if (nickname == undefined) {
        res.status(500).send("Nickname não existe.");
    } else if (tipo == undefined) {
        res.status(500).send("Tipo não existe.");
    } else {
        usuarioModel.torneio(url, nickname, tipo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\Houve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function consultaTorneio(req, res) {
    var nickname = req.params.nickname;
    usuarioModel.consultaTorneio(nickname).then(resposta => {
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
    entrar,
    cadastrar,
    listar,
    testar,
    torneio,
    consultaTorneio
}