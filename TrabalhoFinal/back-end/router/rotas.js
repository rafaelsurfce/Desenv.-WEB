const ReservarService = require('../services/reservarService')
const AcaoService = require('../services/acaoService');
const express = require("express");
const FuncionarioService = require('../services/funcionarioService');




const funcionarioService = new FuncionarioService();
const reservarService = new ReservarService();

const router = express.Router();


router.post('/', async (pergunta, resposta) =>{

    
    const {username, password} = pergunta.body;
    const result = await funcionarioService.consultarFuncionario(username, password);
    resposta.status(200).json({resultado: result});

});


router.post('/cadastro', async (pergunta, resposta) =>{
    const {nome, dataDeNascimento, cpf, telefone, email, usuario, password, confPassword} = pergunta.body;

    const result = await funcionarioService.cadastrarFuncionario(nome, dataDeNascimento, cpf, telefone, email, usuario, password, confPassword);
    resposta.status(200).json({msg: result});
});


router.post('/reservar', async(pergunta, resposta) =>{

    
    const {cliente, cpf, rg, telefone, endereco, data, mesa, cadeiras, horaInicial, horaFinal} = pergunta.body;


    const result = await reservarService.inserirReserva(cliente, cpf, rg, telefone, endereco, data, mesa, cadeiras, horaInicial, horaFinal);
    resposta.status(200).json({resultado: result})
    
});




router.get('/consultar', async (pergunta, resposta) =>{
    const result = await reservarService.listarReservas();

    resposta.status(200).json({reservas: result});
   
});


router.get('/historico', (pergunta, resposta) =>{
    
});




router.delete('/consultar/:id', async (pergunta, resposta) => {

    const id = pergunta.params.id
    const result = await reservarService.excluirReserva(id);
    resposta.status(200).json({msg: result })

});

router.put('/consultar/:id', async (pergunta, resposta) => {
    const id = pergunta.params.id;
    const {cliente, cpf, rg, telefone, endereco, data, mesa, cadeiras, horaInicial, horaFinal} = pergunta.body;
    const result = await reservarService.atualizarReserva(id, cliente, cpf, rg, telefone, endereco, data, mesa, cadeiras, horaInicial, horaFinal)
    resposta.status(200).json({resultado: result});
    
});

module.exports = router;