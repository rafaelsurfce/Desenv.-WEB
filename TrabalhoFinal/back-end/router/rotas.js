const ReservarService = require('../services/reservarService')
const AcaoService = require('../services/acaoService');
const express = require("express");
const FuncionarioService = require('../services/funcionarioService');




const funcionarioService = new FuncionarioService();
const reservarService = new ReservarService();

const router = express.Router();


router.get('/', async (pergunta, resposta) =>{

    //variaveis de teste
    const username = 'rafaelsurfce';
    const password = '123456';
    
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
    const usuario = 'surfce';
    const senha = '123456'
    const senha2 = '123456'
    const result = await funcionarioService.cadastrarFuncionario(nome, data, cpf, telefone, email, usuario, senha, senha2);

    resposta.status(200).send(result);
    

    
});


router.get('/reservar', async(pergunta, resposta) =>{

    //variaveis de teste

    let cliente = 'Francieudo Barbosa';
    let cpf = '123.456.789-80';
    let rg = '2002020511561';
    let telefone = '88994955956';
    let endereco = 'rua furtunato silva';
    let data = '2022-02-07';
    let mesa = 16;
    let cadeiras = 6;
    let horaInicial = 16;
    let horaFinal = 17;


    const result = await reservarService.inserirReserva(cliente, cpf, rg, telefone, endereco, data, mesa, cadeiras, horaInicial, horaFinal);
    resposta.status(200).send(result)
    
});




router.get('/consultar', async (pergunta, resposta) =>{
    const result = await reservarService.listarReservas();

    resposta.status(200).send(result);
   
});


router.get('/historico', (pergunta, resposta) =>{
    
});




router.delete('/:id', (pergunta, resposta) => {
    const id = pergunta.params.id;

});

router.put('/consultar/:id', (pergunta, resposta) => {

});

module.exports = router;