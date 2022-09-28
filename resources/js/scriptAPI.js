const URL = "https://pokeapi.co/api/v2/pokemon?limit=100/"
let nomesPokemons = document.querySelector("#datalistPokemonsOptions")
let dadosGerais = document.querySelector("#dadosGerais")
var listaPokemons = []
var estadoDados
var quantidadePokemons

async function pesquisarTodosPokemons() {
    try {
        const resposta = await fetch(URL)
        estadoDados = "Carregando dados..."
        populandoDadosGerais(0, estadoDados)

        const dados = await resposta.json()
        estadoDados = "Dados carregados."
        populandoDadosGerais(dados.count, estadoDados)

        // Populando lista de Pokémons
        dados.results.forEach(pokemons => {
            let nomePokemon = pokemons.name
            let idPokemon = pokemons.url.replace("https://pokeapi.co/api/v2/pokemon/").replace(/[^0-9]/g, '')
            // Refatorar com switch
            if (idPokemon < 10) { idPokemon = `000${idPokemon}` } 
            else if (idPokemon < 100) { idPokemon = `00${idPokemon}` } 
            else if (idPokemon < 1000) { idPokemon = `0${idPokemon}` }
            listaPokemons.push(`"${nomePokemon.toUpperCase()}"`)
        })

    }
    catch (error) {
        dadosGerais.innerHTML = `
                <h2>Dados gerais</h2>
                <div class="alert-danger my-3 p-2">Erro ao carregar dados!</div>
              `
        console.log(error)
    }
}

function populandoDadosGerais(numeroDePokemons, estadoDoDado) {
    dadosGerais.innerHTML = `
    <div class="accordion my-3" id="accordionDadosGerais">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button id="btnDadosGerais" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Dados Gerais
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionDadosGerais">
          <div class="accordion-body">
              <div class="row">
                  <div class="col">
                      <p class="d-flex justify-content-between align-items-center">Pokémons encontrados:</p>
                      <span class="badge bg-primary rounded-pill">${numeroDePokemons}</span>
                  </div>
                  <div class="col">
                      <p class="d-flex justify-content-between align-items-center">Estado dos dados:</p>
                      <span class="badge bg-primary rounded-pill">${estadoDoDado}</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#btnDadosGerais" aria-expanded="true" aria-controls="btnDadosGerais">
      Botão com data-target
    </button>

    <div class="collapse" id="btnDadosGerais">
      <div class="card card-body">
          <div class="row">
            <div class="col">
                <p class="d-flex justify-content-between align-items-center">Pokémons encontrados:</p>
                <span class="badge bg-primary rounded-pill">${numeroDePokemons}</span>
            </div>
            <div class="col">
                <p class="d-flex justify-content-between align-items-center">Estado dos dados:</p>
                <span class="badge bg-primary rounded-pill">${estadoDoDado}</span>
            </div>
          </div>
        </div>
    </div>

    
    `
}

// function listItems(items, pageActual, limitItems) {
//     let result = [];
//     let totalPage = Math.ceil(items.length / limitItems);
//     let count = (pageActual * limitItems) - limitItems;
//     let delimiter = count + limitItems;
//     if (pageActual <= totalPage) {
//         for (let i = count; i < delimiter; i++) {
//             if (items[i] != null) {
//                 result.push(items[i]);
//             }
//             count++;
//         }
//     }
//     return result;
// };
// var next = ['Next 1', 'Next 2', 'Next 3', 'Next 4', 'Next 5'];
// var resultNext = listItems(next, 1, 2);
// var resultNext2 = listItems(next, 2, 2);
// var resultNext3 = listItems(next, 3, 2);

window.onload = () => {
  pesquisarTodosPokemons()
}