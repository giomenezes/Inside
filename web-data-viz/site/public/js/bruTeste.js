//variáveis de fantasia
var contLivroSenhor = Number(0);
var contLivroGOT = Number(0);
var contLivroMago = Number(0);
var contLivroHP = Number(0);

//variáveis de ficção
var contLivroDuna = Number(0);
var contLivroNeuro = Number(0);
var contLivroJogador = Number(0);
var contLivroFim = Number(0);

var ganhadorVarVar = "";

var resp1A = "";
var resp1B = "";

function comecarQuizz() {
    if (sessionStorage.ID_USUARIO != 0) {
        resp1A = "Uma terra muito, muito distante"
        resp1B = "Um mundo dominado pela tecnologia"
        divQuizz.style = "display:block"
        pergunta1.innerHTML = `
            <div class="pQuizz">Você prefere uma história de:</div>
            <div class="btnQuizzPerg">
            <button id="perg1A" class="perguntas" style=" background-color: #D3F5FA;" onclick="perguntaQuizz1('${resp1A}')">Uma terra muito, muito distante</button>
            <div class="pQuizz" style="display: flex; align-items: center;">ou</div>
            <button id="perg1A" class="perguntas" style=" background-color: #D3F5FA;" onclick="perguntaQuizz1('${resp1B}')">Um mundo dominado pela tecnologia</button>
            </div>
            `

    } else {
        alert('Por favor logue antes!')
    }
}



var texto2a = "";
var texto2b = "";
function perguntaQuizz1(resposta1) {
    if (resposta1 == "Um mundo dominado pela tecnologia") {
        texto2a = "Hackers e jogos"
        texto2b = "Diferentes mundos"

        contLivroJogador++;
        contLivroNeuro++;
        contLivroDuna++;
        contLivroFim++;
    }
    if (resposta1 == "Uma terra muito, muito distante") {
        texto2a = "Dragões"
        texto2b = "Feiticeiros"

        contLivroMago++;
        contLivroGOT++;
        contLivroSenhor++;
        contLivroHP++;

    }
    pergunta2.style = "display: block";
    pergunta2.innerHTML = `
        <div class="pQuizz">Você prefere uma história com:</div>
        <div class="btnQuizzPerg">
        <button id="perg2A" class="perguntas" style=" background-color: #A6D8DF;" onclick="perguntaQuizz2('${texto2a}')">${texto2a}</button>
        <div class="pQuizz" style="display: flex; align-items: center;">ou</div>
        <button id="perg2A" class="perguntas" style=" background-color: #A6D8DF;" onclick="perguntaQuizz2('${texto2b}')">${texto2b}</button>
        </div>
        `
}


function perguntaQuizz2(resposta2) {
    if (resposta2 == "Hackers e jogos") {
        texto2a = "Competições e pontuações"
        texto2b = "Corrida contra o tempo"

        contLivroJogador++;
        contLivroNeuro++;

    }
    if (resposta2 == "Diferentes mundos") {
        texto2a = "Políticas"
        texto2b = "Luta contra o tempo"

        contLivroDuna++;
        contLivroFim++;

    }
    if (resposta2 == "Dragões") {
        texto2a = "Política"
        texto2b = "Bem vs Mal"

        contLivroGOT++;
        contLivroSenhor++;

    }
    if (resposta2 == "Feiticeiros") {
        texto2a = "Animais falantes"
        texto2b = "Varinhas mágicas"

        contLivroMago++;
        contLivroHP++;

    }
    pergunta3.style = "display: block";
    pergunta3.innerHTML = `
        <div class="pQuizz">Você prefere uma história com:</div>
        <div class="btnQuizzPerg">
        <button id="perg3A" class="perguntas" style=" background-color: #7EC2CC;" onclick="perguntaQuizz3('${texto2a}')">${texto2a}</button>
        <div class="pQuizz" style="display: flex; align-items: center;">ou</div>
        <button id="perg3A" class="perguntas" style=" background-color: #7EC2CC;" onclick="perguntaQuizz3('${texto2b}')">${texto2b}</button>
        </div>
        `
}

function perguntaQuizz3(resposta3) {

    if (resposta3 == "Competições e pontuações") {
        texto2a = "Trágico"
        texto2b = "Emocionante"

        contLivroJogador++;
    }
    if (resposta3 == "Corrida contra o tempo") {
        texto2a = "Trágico"
        texto2b = "Emocionante"

        contLivroNeuro++;

    }

    if (resposta3 == "Políticas") {
        texto2a = "Viagens ao futuro e passado"
        texto2b = "A criação de um novo império"

        contLivroDuna++;

    }
    if (resposta3 == "Política") {
        texto2a = "Dramático"
        texto2b = "Épico"

        contLivroGOT++;

    }
    if (resposta3 == "Bem vs Mal") {
        texto2a = "Dramático"
        texto2b = "Épico"

        contLivroSenhor++;
    }
    if (resposta3 == "Animais falantes") {
        texto2a = "Triste"
        texto2b = "Final feliz"

        contLivroMago++;

    }
    if (resposta3 == "Varinhas mágicas") {
        texto2a = "Triste"
        texto2b = "Final feliz"

        contLivroHP++;

    }
    if (resposta3 == "Luta contra o tempo") {
        texto2a = "Viagens ao futuro e passado"
        texto2b = "A criação de um novo império"

        contLivroFim++;

    }


    pergunta4.style = "display: block";
    pergunta4.innerHTML = `
        <div class="pQuizz">Você prefere uma história com um final:</div>
        <div class="btnQuizzPerg">
            <button id="perg4A" class="perguntas" style=" background-color: #519AA5;" onclick="perguntaQuizz4('${texto2a}')">${texto2a}</button>
        <div class="pQuizz" style="display: flex; align-items: center;">ou</div>
        <button id="perg4A" class="perguntas" style=" background-color: #519AA5;" onclick="perguntaQuizz4('${texto2b}')">${texto2b}</button>
        </div>
        `
}
function perguntaQuizz4(resposta4) {

    if (resposta4 == "Dramático") {
        texto2a = "Magia"
        texto2b = "Luta"

        contLivroGOT++;

    }
    if (resposta4 == "Épico") {
        texto2a = "Magia"
        texto2b = "Luta"

        contLivroSenhor++;

    }
    if (resposta4 == "Triste") {
        texto2a = "Corrida contra o tempo"
        texto2b = "Lutas"

        contLivroMago++;

    }
    if (resposta4 == "Final feliz") {
        texto2a = "Corrida contra o tempo"
        texto2b = "Lutas"

        contLivroHP++;

    }
    if (resposta4 == "Trágico") {
        texto2a = "Um ponto de vista"
        texto2b = "Vários pontos de vistas"

        contLivroNeuro++;

    }
    if (resposta4 == "Emocionante") {
        texto2a = "Um ponto de vista"
        texto2b = "Vários pontos de vistas"

        contLivroJogador++;

    }
    if (resposta4 == "Viagens ao futuro e passado") {
        texto2a = "Série"
        texto2b = "Livro único"

        contLivroFim++;

    }
    if (resposta4 == "A criação de um novo império") {
        texto2a = "Série"
        texto2b = "Livro único"

        contLivroDuna++;

    }



    pergunta5.style = "display: block";
    pergunta5.innerHTML = `
        <div class="pQuizz">Você prefere uma história com:</div>
        <div class="btnQuizzPerg">
        <button id="perg5A" class="perguntas" style=" background-color: #3E7F89;" onclick="perguntaQuizz5('${texto2a}')">${texto2a}</button>
        <div class="pQuizz" style="display: flex; align-items: center;">ou</div>
        <button id="perg5A" class="perguntas" style=" background-color: #3E7F89;" onclick="perguntaQuizz5('${texto2b}')">${texto2b}</button>
        </div>
        `
}
function perguntaQuizz5(resposta5) {
    divQuizz.style = "display:none";
    quizzResultado.style = "display:block";

    if (resposta5 == "Magia") {
        contLivroSenhor++;
    }
    if (resposta5 == "Luta") {
        contLivroGOT++;
    }
    if (resposta5 == "Corrida contra o tempo") {
        contLivroMago++;
    }
    if (resposta5 == "Lutas") {
        contLivroHP++;
    }
    if (resposta5 == "Um ponto de vista") {
        contLivroNeuro++;
    }
    if (resposta5 == "Vários pontos de vistas") {
        contLivroJogador++;
    }
    if (resposta5 == "Série") {
        contLivroDuna++;
    }
    if (resposta5 == "Livro único") {
        contLivroFim++;
    }
    if (contLivroDuna >= 3) {
        quizzResultado.innerHTML = `
            <div class="containerQuizzResul" style="display: flex;">
               
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                    Duna - Parte 1</div>
                    <div onclick="mostrar(4)">
                        <img src="./img/imgCapaLivros/duna.jpg">
                    </div>  
                </div>`

        ganhadorVar = 4
    }
    if (contLivroSenhor >= 3) {
        quizzResultado.innerHTML = `
            <div class="containerQuizzResul" style="display: flex;">
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                    A sociedade do Anel - Parte 1</div>
                    <div onclick="mostrar(11)">
                        <img src="./img/imgCapaLivros/ASociedadedoAnel.jpg">
                    </div>  `
        ganhadorVar = 11
    }
    if (contLivroGOT >= 3) {
        quizzResultado.innerHTML = `<div class="containerQuizzResul" style="display: flex;">
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                        As Crônicas de Gelo e Fogo - Parte 1</div>
                    <div onclick="mostrar(3)">
                        <img src="./img/imgCapaLivros/AGuerrado Tronos.jpg">
                    </div>  `
        ganhadorVar = 3
    }
    if (contLivroMago >= 3) {
        quizzResultado.innerHTML = `<div class="containerQuizzResul" style="display: flex;">
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                        O Mago Aprendiz</div>
                    <div onclick="mostrar(14)">
                        <img src="./img/imgCapaLivros/magoAprendiz.jpg">
                    </div>  `
        ganhadorVar = 14
    }
    if (contLivroHP >= 3) {
        quizzResultado.innerHTML = `<div class="containerQuizzResul" style="display: flex;">
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                    Duna - Parte 1</div>
                    <div onclick="mostrar(15)">
                        <img src="./img/imgCapaLivros/HarryPottereaPedraFilosofal.jpg">
                    </div>  `
        ganhadorVar = 15
    }
    if (contLivroNeuro >= 3) {
        quizzResultado.innerHTML = `<div class="containerQuizzResul" style="display: flex;">
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                        Neuromancer</div>
                    <div onclick="mostrar(5)">
                        <img src="./img/imgCapaLivros/Neuromancer.jpg">
                    </div>  `
        ganhadorVar = 5
    }
    if (contLivroJogador >= 3) {
        quizzResultado.innerHTML = `<div class="containerQuizzResul" style="display: flex;">
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                        Jogador Número Um</div>
                    <div onclick="mostrar(20)">
                        <img src="./img/imgCapaLivros/JogadorNúmeroUm.jpg">
                    </div>  `
        ganhadorVar = 20
    }
    if (contLivroFim >= 3) {
        quizzResultado.innerHTML = `<div class="containerQuizzResul" style="display: flex;">
                     <div class="pQuizzResultado">Seu resultado foi: <br>
                        O Fim da Eternidade</div>
                    <div onclick="mostrar(1)">
                        <img src="./img/imgCapaLivros/oFimdoAmanha.jpg">
                    </div>  `
        ganhadorVar = 1
    }



}

function cadastrarResultado() {
    fetch("/quizz/cadastrarQuizz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkUsuarioServer: ID_USUARIO,
            fkLivroServer: ganhadorVar,
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}