arrayImagens = [];
arraySorteados = [];
arrayEscolhidos = [];
arrayEscolhidos2 = [];
arrayEscolhidos3 = [];

countRound = 0;
countRound2 = 0;
countRound3 = 0;
countRound4 = 0;

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
}

mostrar();

function esquerda() {
    if (countRound < 8) {
        arrayEscolhidos.push(chave[countRound].esquerda);
        chave[countRound].esquerda = "";
        chave[countRound].direita = "";

        if (countRound >= 7) {
            alert("Rodada 2 começou!!")
            countRound++;
        } else {
            countRound++;
            mostrar();
        }
    } else if (countRound2 < 4) {
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
            alert("Rodada 3 começou");
            countRound2++;
        } else {
            countRound2++;
            mostrar();
        }
    }  else if (countRound3 < 2) {
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
        chave[countRound3].esquerda = ""
        chave[countRound3].direita = ""

        if (countRound3 >= 1) {
            alert("Última rodada!!");
            countRound3++;
        } else {
            countRound3++;
            mostrar();
        }
    } else {
        chave = [{
            esquerda: arrayEscolhidos3[0],
            direita: arrayEscolhidos3[1]
        }]

        mostrar();
        alert(`Vencedor: ${chave[0].esquerda}`);

        fetch("/usuarios/torneio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: sessionStorage.NICK_USER,
                url: chave[0].esquerda
            })
        }).then ((resposta) => {
            if (resposta.ok) {
                console.log("ESTOU NO THEN DO torneio()");
            }
        }).catch ((erro) => {
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
            alert("Rodada 2 começou!!")
            countRound++;
        } else {
            countRound++;
            mostrar();
        }
    }  else if (countRound2 < 4) {
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
            alert("Rodada 3 começou");
            countRound2++;
        } else {
            countRound2++;
            mostrar();
        }
    } else if (countRound3 < 2) {
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
            alert("última rodada!!");
            countRound3++;
        } else {
            countRound3++;
            mostrar();
        }
    } else {
        chave = [{
            esquerda: arrayEscolhidos3[0],
            direita: arrayEscolhidos3[1]
        }]

        mostrar();
        alert(`Vencedor: ${chave[0].direita}`);

        fetch("/usuarios/torneio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: sessionStorage.NICK_USER,
                url: chave[0].direita
            })
        }).then ((resposta) => {
            if (resposta.ok) {
                console.log("ESTOU NO THEN DO torneio()");
            }
        }).catch ((erro) => {
            console.log(erro);
        });
    }
}

