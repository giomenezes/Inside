const respostas = [];
const imagens = ['1', '2', '3'];
const sorteadas = [];
const repetidas = [];

function sortear() {
    var ran = Math.floor(Math.random()*imagens.length);
    var imgAtual = imagens[ran];

    if (sorteadas[i] != repetidas[i]) {
        repetidas.push(sorteadas[i]);
    } else {
        sorteadas.push(imgAtual);
        // mostrar a foto 
    } 
}