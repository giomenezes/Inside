var arrayImagens = [];
var arraySorteados = [];
var arrayEscolhidos = [];
var arrayEscolhidos2 = [];
var arrayEscolhidos3 = [];

var countRound = 0;
var countRound2 = 0;
var countRound3 = 0;
var countRound4 = 0;

let chave = [{
    esquerda: "",
    direita: ""
},
{
    esquerda: "",
    direita: ""
},
{
    esquerda: "",
    direita: ""
},
{
    esquerda: "",
    direita: ""
},
{
    esquerda: "",
    direita: ""
},
{
    esquerda: "",
    direita: ""
},
{
    esquerda: "",
    direita: ""
},
{
    esquerda: "",
    direita: ""
}];

var winner = undefined;

function aleatorio() {
    var numAleatorio = Number((Math.random() * 15).toFixed());
    return numAleatorio;
}

arrayImagens.push("../assets/quiz/art deco.png")
arrayImagens.push("../assets/quiz/contemporaneo.png")
arrayImagens.push("../assets/quiz/ecletico.png")
arrayImagens.push("../assets/quiz/industrial.png")
arrayImagens.push("../assets/quiz/moderno.png")
arrayImagens.push("../assets/quiz/oriental.png")
arrayImagens.push("../assets/quiz/rustico.png")
arrayImagens.push("../assets/quiz/tropical.png")
arrayImagens.push("../assets/quiz/boho.png")
arrayImagens.push("../assets/quiz/cottage.png")
arrayImagens.push("../assets/quiz/escandinavo.png")
arrayImagens.push("../assets/quiz/minimalista.png")
arrayImagens.push("../assets/quiz/organico.png")
arrayImagens.push("../assets/quiz/provencal.png")
arrayImagens.push("../assets/quiz/tradicional.png")
arrayImagens.push("../assets/quiz/vintage.png")

function criarChave() {
    for (let i = 0; i < chave.length; i++) {
        if (chave[i].esquerda == "") {
            var numeroAleatorio = aleatorio();

            while (arraySorteados.indexOf(numeroAleatorio) != -1) {
                numeroAleatorio = aleatorio();
            }

            arraySorteados.push(numeroAleatorio);
            chave[i].esquerda = arrayImagens[numeroAleatorio];
        }
        if (chave[i].direita == "") {
            var numeroAleatorio = aleatorio();

            while (arraySorteados.indexOf(numeroAleatorio) != -1) {
                numeroAleatorio = aleatorio();
            }

            arraySorteados.push(numeroAleatorio);
            chave[i].direita = arrayImagens[numeroAleatorio];
        }
    }
}

criarChave();

function mostrar() {
    if (countRound < 8) {
        document.getElementById("direita").src = chave[countRound].direita;
        document.getElementById("esquerda").src = chave[countRound].esquerda;
    } else if (countRound2 < 4) {
        document.getElementById("direita").src = chave[countRound2].direita;
        document.getElementById("esquerda").src = chave[countRound2].esquerda;
    } else if (countRound3 < 2) {
        document.getElementById("direita").src = chave[countRound3].direita;
        document.getElementById("esquerda").src = chave[countRound3].esquerda;
    } else {
        document.getElementById("direita").src = chave[0].direita;
        document.getElementById("esquerda").src = chave[0].esquerda;
    }

    console.log("Imagens sorteadas!!")

    if (winner != undefined) {
        divEscolhaUm.innerHTML = "";
        divEscolhaDois.innerHTML = "";
        divVS.innerHTML = "";

        divFinal.style = "display: flex;";
        divFinal.innerHTML = `
        <div id="vencedor">
            <h1>O ESTILO VENCEDOR FOI:</h1> 
            <img src="${winner}" alt="">
        </div>
        <div id="links">
            <p>PARABÉNS! Você descobriu o estilo que mais combina contigo! Agora, você pode ler os nossos posts e identificar melhor com o design que você quer dar para sua casa. Para conseguir salvar esse resultado, você precisa se cadastrar em nosso blog! Caso contrário, você pode descobrir mais sobre outros estilos de design de interiores.</p>
            <button onclick="verificarSessao()">IR PARA SEU PERFIL</button>
            <button onclick="window.location.href = ''./start.html'">VOLTAR PARA INÍCIO DO QUIZ</button>
            <button onclick="window.location.href = ''../index.html'">VOLTAR PARA A HOME</button>
        </div>
    `
    }
}

mostrar();

h2Rodadas.innerHTML = '1/4';

function esquerda() {
    if (countRound < 8) {
        arrayEscolhidos.push(chave[countRound].esquerda);
        chave[countRound].esquerda = "";
        chave[countRound].direita = "";

        if (countRound >= 7) {
            console.log("Rodada 2 começou!!")
            countRound++;
        } else {
            countRound++;
            mostrar();
        }
    } else if (countRound2 < 4) {
        h2Rodadas.innerHTML = '2/4';

        if (countRound2 == 0) {
            chave = [{
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            }];

            arraySorteados = [];

            for (let i = 0; i < chave.length; i++) {
                if (chave[i].esquerda == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 7) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].esquerda = arrayEscolhidos[numeroAleatorio];
                }
                if (chave[i].direita == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 7) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].direita = arrayEscolhidos[numeroAleatorio];
                }
            }
        }

        arrayEscolhidos2.push(chave[countRound2].esquerda);
        chave[countRound2].esquerda = "";
        chave[countRound2].direita = "";

        console.log(chave);

        if (countRound2 >= 3) {
            console.log("Rodada 3 começou");

            countRound2++;
        } else {
            countRound2++;

            mostrar();
        }
    } else if (countRound3 < 2) {
        h2Rodadas.innerHTML = '3/4';

        if (countRound3 == 0) {
            chave = [{
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            }];

            arraySorteados = [];

            for (let i = 0; i < chave.length; i++) {
                if (chave[i].esquerda == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 3) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].esquerda = arrayEscolhidos2[numeroAleatorio];
                }
                if (chave[i].direita == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 3) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].direita = arrayEscolhidos2[numeroAleatorio];
                }
            }
        }

        arrayEscolhidos3.push(chave[countRound3].esquerda);
        chave[countRound3].esquerda = "";
        chave[countRound3].direita = "";

        if (countRound3 >= 1) {
            console.log("Última rodada!!");

            countRound3++;
        } else {

            countRound3++;
            mostrar();
        }
    } else {
        h2Rodadas.innerHTML = '4/4';

        chave = [{
            esquerda: arrayEscolhidos3[0],
            direita: arrayEscolhidos3[1]
        }];

        countRound4++;
        mostrar();
        console.log(`Vencedor: ${chave[0].esquerda}`);
        winner = chave[0].esquerda;

        fetch("/usuarios/torneio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: sessionStorage.NICK_USER,
                url: chave[0].esquerda
            })
        }).then((resposta) => {
            if (resposta.ok) {
                console.log("ESTOU NO THEN DO torneio()");
            }
        }).catch((erro) => {
            console.log(erro);
        });
    }
}

function direita() {
    if (countRound < 8) {
        arrayEscolhidos.push(chave[countRound].direita);
        chave[countRound].esquerda = "";
        chave[countRound].direita = "";

        if (countRound >= 7) {
            console.log("Rodada 2 começou!!")
            countRound++;
        } else {
            countRound++;
            mostrar();
        }
    } else if (countRound2 < 4) {
        h2Rodadas.innerHTML = '2/4';

        if (countRound2 == 0) {
            chave = [{
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            }];

            arraySorteados = [];

            for (let i = 0; i < chave.length; i++) {
                if (chave[i].esquerda == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 7) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].esquerda = arrayEscolhidos[numeroAleatorio];
                }
                if (chave[i].direita == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 7) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].direita = arrayEscolhidos[numeroAleatorio];
                }
            }
        }

        arrayEscolhidos2.push(chave[countRound2].direita);
        chave[countRound2].esquerda = "";
        chave[countRound2].direita = "";

        console.log(chave);

        if (countRound2 >= 3) {
            console.log("Rodada 3 começou");

            countRound2++;
        } else {

            countRound2++;
            mostrar();
        }
    } else if (countRound3 < 2) {
        h2Rodadas.innerHTML = '3/4';

        if (countRound3 == 0) {
            chave = [{
                esquerda: "",
                direita: ""
            },
            {
                esquerda: "",
                direita: ""
            }];

            arraySorteados = [];

            for (let i = 0; i < chave.length; i++) {
                if (chave[i].esquerda == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 3) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].esquerda = arrayEscolhidos2[numeroAleatorio];
                }
                if (chave[i].direita == "") {
                    var numeroAleatorio = aleatorio();

                    while (arraySorteados.indexOf(numeroAleatorio) != -1 || numeroAleatorio > 3) {
                        numeroAleatorio = aleatorio();
                    }

                    arraySorteados.push(numeroAleatorio);
                    chave[i].direita = arrayEscolhidos2[numeroAleatorio];
                }
            }
        }

        arrayEscolhidos3.push(chave[countRound3].direita);
        chave[countRound3].esquerda = ""
        chave[countRound3].direita = ""

        if (countRound3 >= 1) {
            console.log("última rodada!!");
            countRound3++;
        } else {
            countRound3++;
            mostrar();
        }
    } else {
        h2Rodadas.innerHTML = '4/4';

        chave = [{
            esquerda: arrayEscolhidos3[0],
            direita: arrayEscolhidos3[1]
        }];

        countRound4++;
        mostrar();
        console.log(`Vencedor: ${chave[1].direita}`);
        winner = chave[1].direita;

        fetch("/usuarios/torneio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: sessionStorage.NICK_USER,
                url: chave[1].direita
            })
        }).then((resposta) => {
            if (resposta.ok) {
                console.log("ESTOU NO THEN DO torneio()");
            }
        }).catch((erro) => {
            console.log(erro);
        });
    }
}

function verificarSessao() {
    if (sessionStorage.NICK_USER == undefined) {
        alert("Faça o login para salvar seu resultado!");
        window.location = "../usuario/login.html";
    } else {
        alert("Estilo salvo com sucesso!");
        window.location = "../dashboard/perfilUser.html";
    }
}