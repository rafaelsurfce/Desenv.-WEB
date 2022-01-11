const PokemonService = require ("../services/listar_pokemons")
const express = require('express');


const router= express.Router(); 

const pokemonService = new PokemonService();

router.get('/', (pergunta,resposta)  =>{
    const pokemons = pokemonService.pokemons

    resposta.render('index', {
        pokemons: pokemons

    });
});



router.get('/:id', (pergunta,resposta) => {
    const id = pergunta.params.id;
    const pokemon = pokemonService.listarPokemon(Number(id));
    //console.log(pokemon)

    resposta.render('detalhes', {
        pokemon: pokemon
    })
});




module.exports = router; 


