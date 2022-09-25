var storage = sessionStorage

// Adicionando head padrão aos HTML
document.head.innerHTML = 
`
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LCA - Pokédex</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
</head>
`

// Adicionando linguagem pt-br aos HTML
document.documentElement.setAttribute("lang", 'pt-br');

// Encerrar sessão depois de 5 min
setTimeout(() => {
    storage.removeItem("name")
}, 300000);

// Adicionando header aos HTML com o nome do usuário logado
const nomeUsuario = storage.getItem("name")
const sair = document.getElementById("sair")

if (nomeUsuario == null) {
    window.location.href = "/index.html";
}

const header = document.querySelector("header")
header.innerHTML = `<h1>Seja bem vindo(a) <span class="text-primary">${nomeUsuario}</span>!</h1>`

// Adicionando menu aos HTML
const nav = document.querySelector("nav")
nav.innerHTML = `
    <div class="nav">
        <a class="nav-link" href="/mainPokedex.html">Início</a>
        <a class="nav-link" href="/usePokedex.html">Como usar?</a>
        <a class="nav-link" href="/index.html" id="sair">Sair</a>
    </div>
`

sair.addEventListener('click', () => {
    storage.removeItem("name")
    window.location.href = "/index.html";
})

