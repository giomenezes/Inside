var database = require("../database/config");

function buscarUltimosCadastros() {
    var instrucao = `
        SELECT COUNT(*) AS 'usuario', month(dtCadastro) AS 'mes' FROM usuario GROUP BY month(dtCadastro) ORDER BY month(dtCadastro);
    `

    console.log("Executando a instrução mySQL: \n" + instrucao);
    return database.executar(instrucao);
}

function estiloPopular() {
    var instrucao = `
        SELECT nomeEstilo, count(fkEstilo) as 'qtd' FROM usuarioEstilo JOIN estilo ON idEstilo = fkEstilo GROUP BY fkEstilo;
    `

    console.log("Executando a instrução mySQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastradosHoje() {
    var instrucao = `
        SELECT COUNT(*) AS 'qtd' FROM usuario WHERE month(dtCadastro) = month(now()) AND day(dtCadastro) = day(now())
        GROUP BY month(dtCadastro), day(dtCadastro);
    `

    console.log("Executando a instrução mySQL: \n" + instrucao);
    return database.executar(instrucao);
}

function taxaEngajamento() {
    var instrucao = `
        SELECT (SELECT COUNT(*) FROM usuarioEstilo)/(SELECT COUNT(*) FROM usuario) * 100 AS 'taxa'; 
    `;

    console.log("Executando a instrução mySQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimosCadastros,
    estiloPopular,
    cadastradosHoje,
    taxaEngajamento
};