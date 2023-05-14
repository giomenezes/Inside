const footer = document.createElement('template')

footer.innerHTML =
    `<footer>
<div id="copyright">
    <img class="logotipo" src="../assets/logoWBg.png" alt="Logo: Inside">
    <p> Copyright Inside, 2023. Todos os direitos reservados</p>
</div>
<div id="contato">
    <h4>CONTATO:</h4>
    <p>giovanna.vilasboas@outlook.com</p>
    <br>
    <h5>ACOMPANHE AS REDES SOCIAIS:</h5>
    
    <div id="socialMedia">
        <a href="https://www.behance.net/giosz1/moodboards"><img src="../assets/behance.png" alt="Icon: Behance"></a>
        <a href="https://www.linkedin.com/in/giomenezes/"><img src="../assets/linkedin.png" alt="Icon: LinkedIn"></a>
        <a href="https://www.pinterest.pt/trblgio/"><img src="../assets/pinterest.png" alt="Icon: Pinterest"></a>
        <a href="https://www.instagram.com/trblgio/"><img src="../assets/instagram.png" alt="Icon: Instagram"></a>
        </div>
</div>
</footer>`

document.body.appendChild(footer.content);