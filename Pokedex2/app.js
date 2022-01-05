
const router = require("../Pokedex/router/pokemonsRouter");
const express = require('express');
const { engine } = require('express-handlebars');


const PORTA = 3030;
const app = express();


app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/guis', 
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', './views');




app.use('/pokemons', router);



//redireciona a raiz para a rota pokemons
app.get('/', (pergunta,resposta) => {
    resposta.redirect('/pokemons')
});

app.listen(PORTA, ()=>{
    console.log(`Acesse http://localhost:${PORTA}`)
})

