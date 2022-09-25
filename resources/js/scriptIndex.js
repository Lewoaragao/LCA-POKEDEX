// INDEX
const nomeUsuario = document.getElementById("name")
const form = document.querySelector("form")

form.addEventListener("submit", stopDefAction, false)

function stopDefAction(evt) {
    evt.preventDefault();
}

function entrar() {
    storage.setItem("name", nomeUsuario.value)
    window.location.href = "http://127.0.0.1:5080/pages/mainPokedex.html"
}