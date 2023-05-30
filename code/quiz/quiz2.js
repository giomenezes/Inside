var imagens_16 = [];
var imagens_8 = [];

var sorteados = [];

var contador = 0;
var ultimoNumero = 0;
var ultimoNumero2 = 0;
var preferencia = '';

imagens_16.push(`<img src="../assets/quiz/art deco.png" alt="" id="artDecoPNG" onclick="escolher(1)">`)
imagens_16.push(`<img src="../assets/quiz/contemporaneo.png" alt="" id="contemporaneaPNG" onclick="escolher(2)">`)
imagens_16.push(`<img src="../assets/quiz/ecletico.png" alt="" id="ecleticoPNG" onclick="escolher(3)">`)
imagens_16.push(`<img src="../assets/quiz/industrial.png" alt="" id="industrialPNG" onclick="escolher(4)">`)
imagens_16.push(`<img src="../assets/quiz/moderno.png" alt="" id="modernoPNG" onclick="escolher(5)">`)
imagens_16.push(`<img src="../assets/quiz/oriental.png" alt="" id="orientalPNG" onclick="escolher(6)">`)
imagens_16.push(`<img src="../assets/quiz/rustico.png" alt="" id="rusticoPNG" onclick="escolher(7)">`)
imagens_16.push(`<img src="../assets/quiz/tropical.png" alt="" id="tropicalPNG" onclick="escolher(8)">`)
imagens_16.push(`<img src="../assets/quiz/boho.png" alt="" id="bohoPNG" onclick="escolher(9)">`)
imagens_16.push(`<img src="../assets/quiz/cottage.png" alt="" id="cottagePNG" onclick="escolher(10)">`)
imagens_16.push(`<img src="../assets/quiz/escandinavo.png" alt="" id="escandinavoPNG" onclick="escolher(11)">`)
imagens_16.push(`<img src="../assets/quiz/minimalista.png" alt="" id="minimalistaPNG" onclick="escolher(12);">`)
imagens_16.push(`<img src="../assets/quiz/organico.png" alt="" id="organicoPNG" onclick="escolher(13)">`)
imagens_16.push(`<img src="../assets/quiz/provencal.png" alt="" id="provencalPNG" onclick="escolher(14)">`)
imagens_16.push(`<img src="../assets/quiz/tradicional.png" alt="" id="tradicionalPNG" onclick="escolher(15)">`)
imagens_16.push(`<img src="../assets/quiz/vintage.png" alt="" id="vintagePNG" onclick="escolher(16)">`)

escolher();

function sortear() {
    sorteio = (Math.random() * 15).toFixed();
    ultimoNumero = sorteio;
    return sorteio;
}

function sortear2() {
    sorteio2 = (Math.random() * 15).toFixed();
    ultimoNumero2 = sorteio2;
    return sorteio2
}

function escolher(idIMG) {
    if (imagens_16.length > 0) {
        if (contador > 0) {
            if (ultimoNumero == idIMG) {
                delete (imagens_16[ultimoNumero2])
            } else {
                delete (imagens_16[ultimoNumero])
            }
        }

        var numeroSorteado = sortear();
        var numeroSorteado2 = sortear2();

        while (sorteados.indexOf(numeroSorteado) != -1) {
            if (contador == 8) {
                break
            }
            numeroSorteado = sortear()
        }
        sorteados.push(numeroSorteado);

        while (sorteados.indexOf(numeroSorteado2) != -1) {
            if (contador == 8) {
                break
            }
            numeroSorteado2 = sortear2()
        }
        sorteados.push(numeroSorteado2);

        divEscolhaUm.innerHTML = `${imagens_16[Number(numeroSorteado)]}`;
        imagens_8.push(imagens_16[idIMG - 1])
        divEscolhaDois.innerHTML = `${imagens_16[Number(numeroSorteado2)]}`;

        if (contador == 7) {
            imagens_16 = [];
        }
        contador++
    } else {
        if (contador > 0) {
            if (ultimoNumero == idIMG) {
                delete (imagens_8[ultimoNumero2])
            } else {
                delete (imagens_8[ultimoNumero])
            }
        }

        var numeroSorteado = sortear();
        var numeroSorteado2 = sortear2();

        while (sorteados.indexOf(numeroSorteado) != -1) {
            if (contador == 16) {
                break
            }
            numeroSorteado = sortear()
        }
        sorteados.push(numeroSorteado);

        while (sorteados.indexOf(numeroSorteado2) != -1) {
            if (contador == 16) {
                break
            }
            numeroSorteado2 = sortear2()
        }
        sorteados.push(numeroSorteado2);

        divEscolhaUm.innerHTML = `${imagens_16[Number(numeroSorteado)]}`;
        imagens_16.push(imagens_8[idIMG - 1])
        divEscolhaDois.innerHTML = `${imagens_8[Number(numeroSorteado2)]}`;

        if (contador == 7) {
            imagens_16 = [];
        }
        contador++
    }

}

