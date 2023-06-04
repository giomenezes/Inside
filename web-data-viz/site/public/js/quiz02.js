var imagens_16 = [];
var imagens_8 = [];

var sorteados = [0, 1];
var escolhidos = [];
var escolhidos2 = [];
var rodada = 1;

var contador = 0;
var ultimoNumero = 0;
var ultimoNumero2 = 0;
var preferencia = '';

var numeroSorteado = 0;
var numeroSorteado2 = 0;

imagens_16.push(`<img src="../assets/quiz/art deco.png" alt="" id="artDecoPNG" onclick="escolher(0)">`)
imagens_16.push(`<img src="../assets/quiz/contemporaneo.png" alt="" id="contemporaneaPNG" onclick="escolher(1)">`)
imagens_16.push(`<img src="../assets/quiz/ecletico.png" alt="" id="ecleticoPNG" onclick="escolher(2)">`)
imagens_16.push(`<img src="../assets/quiz/industrial.png" alt="" id="industrialPNG" onclick="escolher(3)">`)
imagens_16.push(`<img src="../assets/quiz/moderno.png" alt="" id="modernoPNG" onclick="escolher(4)">`)
imagens_16.push(`<img src="../assets/quiz/oriental.png" alt="" id="orientalPNG" onclick="escolher(5)">`)
imagens_16.push(`<img src="../assets/quiz/rustico.png" alt="" id="rusticoPNG" onclick="escolher(6)">`)
imagens_16.push(`<img src="../assets/quiz/tropical.png" alt="" id="tropicalPNG" onclick="escolher(7)">`)
imagens_16.push(`<img src="../assets/quiz/boho.png" alt="" id="bohoPNG" onclick="escolher(8)">`)
imagens_16.push(`<img src="../assets/quiz/cottage.png" alt="" id="cottagePNG" onclick="escolher(9)">`)
imagens_16.push(`<img src="../assets/quiz/escandinavo.png" alt="" id="escandinavoPNG" onclick="escolher(10)">`)
imagens_16.push(`<img src="../assets/quiz/minimalista.png" alt="" id="minimalistaPNG" onclick="escolher(11);">`)
imagens_16.push(`<img src="../assets/quiz/organico.png" alt="" id="organicoPNG" onclick="escolher(12)">`)
imagens_16.push(`<img src="../assets/quiz/provencal.png" alt="" id="provencalPNG" onclick="escolher(13)">`)
imagens_16.push(`<img src="../assets/quiz/tradicional.png" alt="" id="tradicionalPNG" onclick="escolher(14)">`)
imagens_16.push(`<img src="../assets/quiz/vintage.png" alt="" id="vintagePNG" onclick="escolher(15)">`)

divEscolhaUm.innerHTML = `${imagens_16[0]}`;
divEscolhaDois.innerHTML = `${imagens_16[1]}`;
escolher();

function sortear_16() {
    sorteio = (Math.random() * 15).toFixed();
    ultimoNumero = sorteio;
    return sorteio;
}

function sortear2_16() {
    sorteio2 = (Math.random() * 15).toFixed();
    ultimoNumero2 = sorteio2;
    return sorteio2
}

function sortear_8() {
    sorteio = (Math.random() * 7).toFixed();
    ultimoNumero = sorteio;
    return sorteio;
}

function sortear2_8() {
    sorteio2 = (Math.random() * 7).toFixed();
    ultimoNumero2 = sorteio2;
    return sorteio2
}

function sortear_4() {
    sorteio = (Math.random() * 3 + 1).toFixed();
    ultimoNumero = sorteio;
    return sorteio;
}

function sortear2_4() {
    sorteio2 = (Math.random() * 3 + 1).toFixed();
    ultimoNumero2 = sorteio2;
    return sorteio2
}

function sortear_2() {
    sorteio = (Math.random() * 1).toFixed();
    ultimoNumero = sorteio;
    return sorteio;
}

function sortear2_2() {
    sorteio2 = (Math.random() * 1).toFixed();
    ultimoNumero2 = sorteio2;
    return sorteio2
}

function escolher(idIMG) {
    // Primeira Fase: Rodada 16
    if (contador <= 7 || contador > 13) {
        if (rodada == 3) {
            for (let i = 0; i < escolhidos2.length; i++) {
                if (escolhidos2[i] == idIMG) {
                    idIMG = i;
                    break;
                }
            }
        }

        if (contador > 0 && contador != 13) {
            // if (ultimoNumero == idIMG) {
            //     delete (imagens_16[ultimoNumero2])
            // } else {
            //     delete (imagens_16[ultimoNumero])
            // }

        } else if (contador == 13) {
            imagens_8 = [];
            sorteados = [];
            ultimoNumeros = -1;
            ultimoNumeros2 = -1;
            rodada++;

            alert("RODADA 3 COMEÇOU")
        }

        if (rodada == 1) {
            numeroSorteado = sortear_16();
            numeroSorteado2 = sortear2_16();
        } else {
            numeroSorteado = sortear_4();
            numeroSorteado2 = sortear2_4();
        }

        while (sorteados.indexOf(numeroSorteado) != -1) {
            // if (contador == 8) {
            //     break
            // }
            if (rodada == 1) {
                numeroSorteado = sortear_16()
            } else {
                numeroSorteado = sortear_4();
            }
        }
        sorteados.push(numeroSorteado);

        while (sorteados.indexOf(numeroSorteado2) != -1) {
            // if (contador == 8) {
            //     break
            // }
            if (rodada == 1) {
                numeroSorteado2 = sortear2_16()
            } else {
                numeroSorteado2 = sortear2_4();
            }
        }
        sorteados.push(numeroSorteado2);

        divEscolhaUm.innerHTML = `${imagens_16[Number(numeroSorteado)]}`;
        divEscolhaDois.innerHTML = `${imagens_16[Number(numeroSorteado2)]}`;

        imagens_8.push(imagens_16[idIMG])
        escolhidos.push(idIMG);

        contador++
        console.log(`RODADA: ${rodada} \n Número sorteado 01: ${numeroSorteado} \n Número sorteado 02: ${numeroSorteado2} \n ${escolhidos}`);
        console.log(imagens_8);
    } else {
        // Segunda Fase: Rodada 8
        var novoID;

        for (let i = 0; i < escolhidos.length; i++) {
            if (escolhidos[i] == idIMG) {
                novoID = i;
                break;
            }
        }

        if (contador > 8) {
            // if (ultimoNumero == idIMG) {
            //     delete (imagens_8[ultimoNumero2])
            // } {
            //     delete (imagens_8[ultimoNumero])
            // }
        } else {
            imagens_16 = [];
            sorteados = [];
            ultimoNumeros = -1;
            ultimoNumeros2 = -1;
            rodada++;

            alert("RODADA 2 COMEÇOU")
        }

        if (rodada == 2) {
            numeroSorteado = sortear_8();
            numeroSorteado2 = sortear2_8();
        }

        while (sorteados.indexOf(numeroSorteado) != -1) {
            if (contador == 12) {
                break;
            }
            if (rodada == 2) {
                numeroSorteado = sortear_8()
            } else {
                numeroSorteado = sortear_2();
            }
        }
        sorteados.push(numeroSorteado);

        while (sorteados.indexOf(numeroSorteado2) != -1) {
            if (contador == 12) {
                break;
            }
            if (rodada == 2) {
                numeroSorteado2 = sortear2_8();
            } else {
                numeroSorteado2 = sortear2_2();
            }
        }
        sorteados.push(numeroSorteado2);

        divEscolhaUm.innerHTML = `${imagens_8[Number(numeroSorteado)]}`;
        divEscolhaDois.innerHTML = `${imagens_8[Number(numeroSorteado2)]}`;
        imagens_16.push(imagens_8[novoID]);
        escolhidos2.push(novoID);

        contador++
        console.log(`RODADA: ${rodada} \n Número sorteado 01: ${numeroSorteado} \n Número sorteado 02: ${numeroSorteado2} \n  ESCOLHIDOS: \n ${escolhidos} \n ${escolhidos2} \n ${novoID} \n SORTEADOS: \n ${sorteados}`);
        console.log(imagens_16);

        alert(imagens_8[novoID]);

    }
}