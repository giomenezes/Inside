const prompt = require('prompt-sync')();
const respostas = [];

for (var rodadas = 0; rodadas < 16; rodadas++) {
    const name = prompt('1 ou 2?')
    respostas.push(name)
}
console.log(respostas)