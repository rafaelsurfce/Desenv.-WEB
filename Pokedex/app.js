
const PokemonService = require ("../Pokedex/services/listar_pokemons");
const http = require ("http");
const { Server } = require("tls");



//const pokemonService = new PokemonService();
//const pokemons = pokemonService.pokemons;
/*
for (const i in pokemons){
    console.table(`Id: ${pokemons[i].id} Nome: ${pokemons[i].nome} PvMax: ${pokemons[i].pvMax} Ataque: ${pokemons[i].ataque} Defesa: ${pokemons[i].defesa}  Ataque Especial: ${pokemons[i].ataqueEspecial} Defesa Especial: ${pokemons[i].defesaEspecial} Velocidade: ${pokemons[i].velocidade}`);
}
*/
const server = http.createServer((pergunta , resposta) =>{

    if (pergunta.url === '/'){
        if(pergunta.method === 'GET'){
        const pokemonService = new PokemonService();
        const pokemons = pokemonService.pokemons;


        let content = '';

        
        for (const i in pokemons){
            const line = `<tr><td>${pokemons[i].id}</td>`+
            `<td><center>${pokemons[i].nome}</center></td>` + 
            `<td><center>${pokemons[i].pvMax}</center></td>` + 
            `<td><center>${pokemons[i].ataque}</center></td>` + 
            `<td><center>${pokemons[i].defesa}</center></td>` + 
            `<td><center>${pokemons[i].ataqueEspecial}</center></td>` + 
            `<td><center>${pokemons[i].defesaEspecial}</center></td>` +
            `<td><center>${pokemons[i].velocidade}</center></td></tr>`
               
            
             
            
            if (Number(i + 1) % 3  == 0 ) {
                content += `${line} `
            }
            else {
                content += line;
            }
        }
        
        resposta.statusCode = 200;
        resposta.end(`
            <!DOCTYPE html>
                <html lang="en">
                <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </meta>
                </head>
                <body> 
                    <center>
                    <caption> POKEMONS </caption>
                    <table border='1'>
                        <tr>
                            <th>Id</th> 
                            <th>nome</th> 
                            <th>PvMax</th> 
                            <th>ataque</th> 
                            <th>defesa</th> 
                            <th>Ataque-Especial</th> 
                            <th>Defesa-Especial</th> 
                            <th>Velocidade</th>
                        </tr>
                        ${content}
                         
                        
                </table>
                </center>
    
                </body>
                </html>
        
        `
        );
    }
    }

});

server.listen(3030, 'localhost', () => {
    //const {address, port } = server.address(); 
    console.log('Server rodando');
    console.log('http://localhost:3030');

});