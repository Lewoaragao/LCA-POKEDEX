const URL = "https://pokeapi.co/api/v2/pokemon?limit=100/"

function pesquisarUmPokemon(elemento){
    console.log(elemento.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${elemento.value}`)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(erro => console.log(erro))
}

function popularListaPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(erro => console.log(erro))
}

window.onload = () => {
    popularListaPokemons()
}