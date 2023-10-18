//pegar a lista do pokemon
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
//pegar o card do pokemon (card principal)
const pokemonsCard = document.querySelector('.pokemon-card')

//usando um forEach para percorrer a lista de pokemons
listaSelecaoPokemons.forEach(pokemon => {
    //usando um evento de click
    pokemon.addEventListener('click', () => {
        //pegando a classe .open lá do HTML e removendo essa classe
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        //pegando o id dos pokemnos (pelo id da lista e pelo id do card)
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'

        //adicionando o cartão principal do pokemon para abrir
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        //fazendo a lógica de trocar a cor vermelha para cada pokémon
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')
    })
})