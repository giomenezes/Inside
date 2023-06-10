const header = document.createElement('template');

if (sessionStorage.EMAIL_USER != undefined) {
    header.innerHTML =
        `<header>
        <a href="../index.html"><img class="logotipo" src="../assets/logoWBg.png" alt="Logo: Inside"></a>
        <div id="divListas">
            <ul>
                <li class="liZoom"><a href="../estilos/listaEstilos.html">Estilos</a></li>
                <li class="liZoom"><a href="../posts/listaPosts.html">Posts</a></li>
                <li class="liZoom"><a href="../quiz/start.html">Quiz</a></li>
                <div class="dropdown">
                        <img src="../assets/user.png" alt="Icon: User" id="user-icon" class="dropbtn" onclick="window.location = '../dashboard/perfilUser.html'">
                        <div class="dropdown-content">
                            <a href="../usuario/login.html" onclick="limpar()">Log Out</a>
                        </div>
                </div>
            </ul>
        </div>
    </header>`
} else {
    header.innerHTML =
        `<header>
            <a href="../index.html"><img class="logotipo" src="../assets/logoWBg.png" alt="Logo: Inside"></a>
            <div id="divListas">
                <ul>
                    <li class="liZoom"><a href="../estilos/listaEstilos.html">Estilos</a></li>
                    <li class="liZoom"><a href="../posts/listaPosts.html">Posts</a></li>
                    <li class="liZoom"><a href="../quiz/start.html">Quiz</a></li>
                    <div class="dropdown">
                            <img src="../assets/user.png" alt="Icon: User" id="user-icon" class="dropbtn">
                            <div class="dropdown-content">
                                <a href="../usuario/cadastro.html">Cadastro</a>
                                <a href="../usuario/login.html">Login</a>
                            </div>
                    </div>
                </ul>
            </div>
        </header>`
}

document.body.appendChild(header.content);

function limpar() {
    sessionStorage.clear();
}