function cadastrar() {
    var nickVar = ipt_nickname.value;
    var nomeVar = ipt_nome.value;
    var telCelularVar = ipt_telCelular.value;
    var telFixoVar = ipt_telFixo.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var confSenhaVar = ipt_conf_senha.value;

    ipt_nickname.style = 'border-color = #072953;'
    ipt_nome.style = 'border-color = #072953;'
    ipt_email.style = 'border-color = #072953;'
    ipt_senha.style = 'border-color = #072953;'
    ipt_telCelular.style = 'border-color = #072953;'
    ipt_telFixo.style = 'border-color = #072953;'

    if (nickVar == '' || nomeVar == '' || telCelularVar == '' || emailVar == '' || senhaVar == '') {
        alert('Favor digitar os campos corretamente.');
        return false;
    } else if (emailVar.indexOf('@') == -1) {
        alert('Favor digitar o email corretamente.');
        iptEmail.style = 'border-color = red;'
        return false;
    } else if (senhaVar.length < 8) {
        alert('Favor digitar uma senha com no mínimo oito caracteres.');
        iptSenha.style = 'border-color = red;'
        return false;
    } else if (senhaVar != confSenhaVar) {
        alert('Favor digitar a senha corretamente.');
        iptSenha.style = 'border-color = red;'
        ipt_conf_senha.style = 'border-color = red;'
        return false;
    }

    fetch(`/usuarios/cadastrar`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickServer: nickVar,
                nomeServer: nomeVar,
                telCelularServer: telCelularVar,
                telFixoServer: telFixoVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log('resposta: ', resposta);
            if (resposta.ok) {
                alert('Cadastro realizado com sucesso!');
                window.location = "../usuario/login.html";
            } else {
                console.log(resposta)
                alert('Erro ao cadastrar usuário.');
            }
        }).catch(function (resposta) {
            console.log('erro: ', resposta);
        });
    return false;

}
