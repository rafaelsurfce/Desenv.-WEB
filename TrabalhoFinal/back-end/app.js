const router  = require('./router/rotas');
const express = require ('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.get('/',)

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/login', router);







app.listen(2222, ()=>{
    console.log(`Acesse http://localhost:${2222}`)
});

app.get('/', (pergunta,resposta)=>{
    resposta.redirect('/login')
});

