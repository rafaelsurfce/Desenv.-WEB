const router  = require('./router/rotas');
const express = require ('express');
const cors = require('cors');
const path = require ('path');
const app = express();



app.get('/',)

app.use(cors({
    origin: 'http://localhost:3000'
}))



//carregando um middleware 
//app.use('/public', express.static(path.join(__dirname, "public")));








app.use('/login', router);


app.get('/', (pergunta,resposta)=>{
    resposta.redirect('/login')
});




app.listen(2222, ()=>{
    console.log(`Acesse http://localhost:${2222}`)
});


