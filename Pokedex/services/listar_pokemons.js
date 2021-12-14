

const Pokemon = require("../models/pokemons");
const fs = require('fs'); //fornece metodos sincronos e assincronos
const path = require('path'); //utilizado para percorrer as pastas



const dbPath = path.resolve(__dirname, '..', 'db', 'pokedex-light.json');


 class PokemonService {
    constructor(){
        this._pokemons = [];
    }

    get pokemons(){
        if(this._pokemons.length === 0){
            const file = fs.readFileSync(dbPath, { encoding: 'utf8' });

            const passes = JSON.parse(file)//vai passear pelo arquivo json

            const { pokemons } = passes;

            const newPokemons = pokemons.map(pokemon =>{
                const {id, name, stats} = pokemon;

                const pvMax = stats[0].base_stat;
                const ataque = stats[1].base_stat;
                const defesa = stats[2].base_stat;
                const ataqueEspecial = stats[3].base_stat;
                const defesaEspecial = stats[4].base_stat;
                const velocidade = stats[5].base_stat;

                return new Pokemon(id, name, pvMax, ataque, defesa, ataqueEspecial, defesaEspecial, velocidade);
            });


            this.pokemons = newPokemons;

           

        }

        

        

        
        return this._pokemons;

    
        
    }
    set pokemons(pokemon){
        this._pokemons = pokemon;
    }

    



}

module.exports = PokemonService;

//const pokemonService = new PokemonService();
//console.log(pokemonService.pokemons);
