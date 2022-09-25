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

// Encerrar sessão
function encerrarSessao() {
    storage.removeItem("name")
    window.location.href = "/index.html";
}