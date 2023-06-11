var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(nick, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nick, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE nickname = '${nick}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nick, nome, email, senha, telefoneCel, telefoneFixo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nick, nome, email, senha, telefoneCel, telefoneFixo);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var insUser = `
        INSERT INTO usuario (nickname, nome, email, senha, adm, dtCadastro) VALUES ('${nick}', '${nome}', '${email}', '${senha}', 0, curdate());
    `;
    var insTelephone = `
        INSERT INTO telefone (fkUsuario, telefoneCelular, telefoneFixo) VALUES ((SELECT nickname FROM usuario as fkUsuario WHERE nickname = '${nick}'), '${telefoneCel}', '${telefoneFixo}');
    `
    console.log("Executando a instrução SQL: \n" + insUser + insTelephone);
    return database.executar(insUser, insTelephone);
}

function torneio(url, nickname) {
    console.log(`${url} \n ${nickname}`);
    var instrucao = `
        INSERT INTO usuarioEstilo VALUES ((SELECT idEstilo FROM estilo WHERE url = '${url}'), '${nickname}', CURDATE());
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function consultaTorneio(nickname) {
    console.log(nickname);
    var instrucao = `
        SELECT * FROM usuarioEstilo JOIN estilo ON idEstilo = fkEstilo WHERE fkUsuario = '${nickname}';
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    torneio,
    consultaTorneio
};