const header = document.createElement('template');

header.innerHTML =
    `<header>
        <a href="../home/home.html"><img class="logotipo" src="../assets/logoWBg.png" alt="Logo: Inside"></a>
        <div id="divListas">
            <ul>
                <li class="liZoom"><a href="../estilos/estilos.html">Estilos</a></li>
                <li class="liZoom"><a href="../posts/posts.html">Posts</a></li>
                <li class="liZoom"><a href="../quiz/quiz.html">Quiz</a></li>
                <div class="dropdown">
                        <img src="../assets/user.png" alt="Icon: User" id="user-icon" class="dropbtn">
                        <div class="dropdown-content">
                            <a href="../cadastro&login/cadastro.html">Cadastro</a>
                            <a href="../cadastro&login/login.html">Login</a>
                        </div>
                </div>
            </ul>
        </div>
    </header>`

document.body.appendChild(header.content);