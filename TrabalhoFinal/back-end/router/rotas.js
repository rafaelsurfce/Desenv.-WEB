const ReservarService = require('../services/reservarService')
const AcaoService = require('../services/acaoService');
const express = require("express");
const FuncionarioService = require('../services/funcionarioService');



const funcionarioService = new FuncionarioService();


const router = express.Router();


router.get('/', (pergunta, resposta) =>{
 const username = pergunta.query.username;
 const password = pergunta.query.password;
 
 const result = funcionarioService.consultarFuncionario(username, password);
 resposta.status(200).send(result)

});


router.get('/cadastro', (pergunta, resposta) =>{
    const nome = pergunta.query.nome;
    const data = pergunta.query.data;
    const cpf = pergunta.query.cpf;
    const telefone = pergunta.query.telefone;
    

    
});


router.get('/reservar', (pergunta, resposta) =>{



    
});




router.get('/consultar', (pergunta, resposta) =>{
   
});


router.get('/historico', (pergunta, resposta) =>{
    
});




router.delete('/:id', (pergunta, resposta) => {
    const id = pergunta.params.id;

});

router.put('/consultar/:id', (pergunta, resposta) => {

});

module.exports = router;