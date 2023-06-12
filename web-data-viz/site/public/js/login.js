function aguardar() {
    window.setTimeout("document.getElementById('divLoading').style.display='flex';", 1000);
}

function login() {
    var nickVar = ipt_nickname.value;
    var senhaVar = ipt_senha.value;

    ipt_nickname.style = 'border-color: #072953;';
    ipt_senha.style = 'border-color: #072953;';

    if (nickVar == '') {
        iptUsuario.style = 'border-color: red;';
        alert('Insira um username correto');
        return false;
    } if (senhaVar == '') {
        iptSenha.style = 'border-color: red;';
        alert('Insira uma senha correta');
        return false;
    } else {
        aguardar()
    }

    console.log("FORM LOGIN: ", nickVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nickServer: nickVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.NICK_USER = json.nickname;
                sessionStorage.NOME_USER = json.nome;
                sessionStorage.EMAIL_USER = json.email;
                sessionStorage.SENHA_USER = json.senha;
                
                if (sessionStorage.NICK_USER == 'trblgio') {
                    setTimeout(function () {
                        window.alert(`Seja bem-vindo(a), ${sessionStorage.NOME_USER}!`)
                        window.location = "../dashboard/dashAdm.html";
                    }, 1000);
                } else {
                    setTimeout(function () {
                        window.alert(`Bem-vindo(a) de volta, ${sessionStorage.NOME_USER}!`)
                        window.location = "../index.html";
                    }, 1000);
                }
            });

        } else {
            alert("Usuário inválido.")
            console.log("Houve um erro ao tentar realizar o login!");
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}