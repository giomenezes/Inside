var rodada = 0;
var sortear1 = (Math.random() * 15).toFixed(0);
var sortear2 = (Math.random() * 15).toFixed(0);

var sorteados = [];
var estiloFinal = '';

sorteios();

function sorteios() {
    if (sortear1 == 0) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/art deco.png" alt="" id="artDecoPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 1) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/boho.png" alt="" id="bohoPNG" onclick="escolher()">`
        sorteados.push(sortear2);
    } if (sortear1 == 2) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/contemporanea.png" alt="" id="contemporaneaPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 3) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/cottage.png" alt="" id="cottagePNG" onclick="escolher()">`
        sorteados.push(sortear2);
    } if (sortear1 == 4) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/ecletico.png" alt="" id="ecleticoPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 5) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/escandinavo.png" alt="" id="escandinavoPNG" onclick="escolher()">`
        sorteados.push(sortear2);
    } if (sortear1 == 6) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/industrial.png" alt="" id="industrialPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 7) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/minimalista.png" alt="" id="minimalistaPNG" onclick="escolher();">`
        sorteados.push(sortear2)
    } if (sortear1 == 8) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/moderno.png" alt="" id="modernoPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 9) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/organico.png" alt="" id="organicoPNG" onclick="escolher()">`
        sorteados.push(sortear2);
    } if (sortear1 == 10) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/oriental.png" alt="" id="orientalPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 11) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/provencal.png" alt="" id="provencalPNG" onclick="escolher()">`
        sorteados.push(sortear2);
    } if (sortear1 == 12) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/rustico.png" alt="" id="rusticoPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 13) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/tradicional.png" alt="" id="tradicionalPNG" onclick="escolher()">`
        sorteados.push(sortear2);
    } if (sortear1 == 14) {
        divEscolhaUm.innerHTML = `<img src="../assets/quiz/tropical.png" alt="" id="tropicalPNG" onclick="escolher()">`
        sorteados.push(sortear1);
    } if (sortear2 == 15) {
        divEscolhaDois.innerHTML = `<img src="../assets/quiz/vintage.png" alt="" id="vintagePNG" onclick="escolher()">`
        sorteados.push(sortear2);
    }
}

function escolher() {
    for (rodada = 0; rodada < 15; rodada++) {
        sortear1();
        sortear2();

        for (var i = 0; i < sorteados.length; i++) {
            if (sortear != sorteados[i]) {
                sorteios()
            } else {
                sortear1();
                sortear2();
            }
        }

        if (rodada = 14) {
            estiloFinal = sortear
            divFinal.innerHTML = `O estilo que mais combina com você é: ${estiloFinal}`
        }
    }
}