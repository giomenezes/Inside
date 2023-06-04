var ultimoSorteadoDir = '0';
var ultimoSorteadoEsq = '1';

var contador = 0;
var rodada = 1;

var escolhidos = [];
var rejeitados = [];

function escolher(idIMG) {
    if (contador <= 7) {
        if (rodada == 1) {
            var sortearDir = Number((Math.random() * 15).toFixed());
            var sortearEsq = Number((Math.random() * 15).toFixed());

            while (escolhidos.indexOf(sortearDir + 'A') != -1 && rejeitados.indexOf(sortearDir + 'A') != -1 && escolhidos.indexOf(sortearDir + 'B') != -1 && rejeitados.indexOf(sortearDir + 'B') != -1) {
                sortearDir = Number((Math.random() * 15).toFixed());
            }

            while (escolhidos.indexOf(sortearEsq + 'B') != -1 && rejeitados.indexOf(sortearEsq + 'B') != -1 && escolhidos.indexOf(sortearEsq + 'A') != -1 && rejeitados.indexOf(sortearEsq + 'A') != -1 && sortearDir == sortearEsq) {
                sortearEsq = Number((Math.random() * 15).toFixed());
            }

            var numeros = idIMG.split('');

            if (numeros.length == 3) {
                var lado = numeros[2];
                var numero = Number(numeros[0] + numeros[1]);
            } else {
                var lado = numeros[1];
                var numero = Number(numeros[0]);
            }

            if (lado == 'A') {
                document.getElementById(`${ultimoSorteadoDir}B`).style.display = 'none';
                document.getElementById(`${sortearDir}B`).style.display = 'block';

                ultimoSorteadoDir = sortearDir;
                escolhidos.push(idIMG);
                rejeitados.push(ultimoSorteadoEsq + 'B');
            } else {
                document.getElementById(`${ultimoSorteadoEsq}A`).style.display = 'none';
                document.getElementById(`${sortearEsq}A`).style.display = 'block';

                ultimoSorteadoEsq = sortearEsq;
                escolhidos.push(idIMG);
                rejeitados.push(ultimoSorteadoDir + 'A');
            }

            contador++;
        }
    } if (contador == 7) {
        console.log(`Escolhidos: ${escolhidos} \n Rejeitados: ${rejeitados}`);

    }
}