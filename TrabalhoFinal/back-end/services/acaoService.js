const Acao = require('../models/acao');
const acoes = require('./../db/acoes');
const mongoose = require('mongoose');

const date = new Date();





class AcaoService{
    constructor(){}
    get acao(){}
    set acao(acao){}



    inserirAcao(usuario, reserva, acao){
        const acao1 = new Acao(usuario, reserva, acao)
        

        new acoes({ 
            usuario: acao1.usuario,
            reserva: acao1.reserva,
            acao: acao1.acao,


        }).save().then(() => {
            console.log('ação registrada com sucesso')

        }).catch((err) =>{
            console.log('Houve um erro ao registrar a função'+err)
        });
        

    }
    procuraAcao(usuario){
        //select bd
    }
    lista(){
        //select bd
    }
}

module.exports = AcaoService;
