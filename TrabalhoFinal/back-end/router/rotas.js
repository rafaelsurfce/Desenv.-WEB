const ReservarService = require('../services/reservarService')
const AcaoService = require('../services/acaoService');
const express = require("express");
const FuncionarioService = require('../services/funcionarioService');



const funcionarioService = new FuncionarioService();


const router = express.Router();


router.get('/', async (pergunta, resposta) =>{

    //variaveis de teste
    const username = 'rafaelsurfce';
    const password = '889618695858x';
    
    const result = await funcionarioService.consultarFuncionario(username, password);
    
    resposta.status(200).send(result)

});


router.get('/cadastro', async (pergunta, resposta) =>{

    //variaveis de teste
    const nome = 'Rafael Lima Pereira';
    const data = '1998-02-80';
    const cpf = '070.178.283.80';
    const telefone = '193';
    const email = 'rafaelsurfc@alu.ufc.br';
    const usuario = 'rafaelsurfce';
    const senha = '123456'
    const senha2 = '123456'
    const result = await funcionarioService.cadastrarFuncionario(nome, data, cpf, telefone, email, usuario, senha, senha2);

    resposta.status(200).send(result);
    

    
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