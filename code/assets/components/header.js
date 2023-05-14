const header = document.createElement('template');

header.innerHTML = 
    `<header>
        <a href="../home/home.html"><img class="logotipo" src="../assets/logoWBg.png" alt="Logo: Inside"></a>
        <div id="divListas">
            <ul>
                <li class="liZoom"><a href="../estilos/estilos.html">Estilos</a></li>
                <li class="liZoom"><a href="../posts/posts.html">Posts</a></li>
                <li class="liZoom"><a href="../quiz/quiz.html">Quiz</a></li>
                <a href="../login/login.html"><img src="../assets/user.png" alt="Icon: User"></a>
            </ul>
        </div>
    </header>`

document.body.appendChild(header.content);