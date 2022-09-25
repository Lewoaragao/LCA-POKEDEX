// Nome de usuário logado
const nomeUsuario = storage.getItem("name")

if (nomeUsuario == null) {
    window.location.href = "/index.html";
}

// Cabeçalho
const header = document.querySelector("header")
header.innerHTML = `<h1>Seja bem vindo(a) <span class="text-primary">${nomeUsuario}</span>!</h1>`

// Menu
const nav = document.querySelector("nav")
const sair = document.querySelector("#sair")
nav.innerHTML = `
    <div class="nav">
        <a class="nav-link" href="/pages/mainPokedex.html">Início</a>
        <a class="nav-link" href="/pages/usePokedex.html">Como usar?</a>
        <a class="nav-link" href="/index.html" onclick="encerrarSessao()">Sair</a>
    </div>
`

// Rodapé
const footer = document.querySelector('footer')
footer.innerHTML = ` ${new Date().getFullYear()}`