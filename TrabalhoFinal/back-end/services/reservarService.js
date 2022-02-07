const Reserva = require('../models/reserva');
const reservas = require('./../db/reservas');
const mongoose = require('mongoose');
const acaoService = require('./acaoService');




const date = new Date()

const acao = new acaoService();






class ReservarService {
    constructor(){}

    get reserva(){}

    set reserva(reserva){}



    inserirReserva(cliente, cpf, rg, telefone=null, endereco=null, data, mesa, cadeiras, horaInicial, horaFinal ){
        //select ao banco aqui
        const resultData= null;
        const resultMesa = null;
        const resultHoraInicial = null;
        const resultHoraFinal = null;
        if(mesa === resultMesa && data === resultData && (horaInicial >= resultHoraInicial && horaInicial <= resultHoraFinal)){
            return "Já consta uma reserva nessa mesa"
        }
        else if (cliente === null  || cpf === null || rg === null || mesa === null || cadeiras === null || data === null || horaInicial === null || horaFinal === null){
            return "Existem alguns campos obrigatorios em branco, impossivel reservar"
        }
        else {
            let mes = date.getMonth();
            let ano = date.getFullYear();
            let dia = date.getDate();
            let hora = date.getHours();
            let minuto = date.getMinutes();
            let segundo = date.getSeconds();
            const id = `${mes}${ano}${dia}${hora}${minuto}${segundo}`

            const reserva = new Reserva(cliente, cpf, rg, telefone, endereco, mesa, cadeiras, data, horaInicial, horaFinal, id)

            let result;
            new reservas({
                cliente: reserva.cliente,
                cpf: reserva.cpf,
                rg: reserva.rg,
                telefone: reserva.telefone,
                endereco: reserva.endereco,
                mesa: reserva.mesa,
                cadeiras: reserva.cadeiras,
                data: reserva.data,
                horaInicial: reserva.horaInicial,
                horaFinal: reserva.horaFinal,
                id: reserva.id

            }).save().then(() => {
                acao.inserirAcao(usuario, Number(id), 'adição',   )
                result = 'reserva cadastrada com sucesso'
                console.log(result)
            }).catch((err) =>{
                result = 'Houve um erro ao registar a reserva: ' + err
                console.log(result)
            });
            return result
        }
    }
    procurarReserva(id){
        //select bd
    }
    excluirReserva(id){
        reservas.deleteOne({id: id});
    }
    atualizarReserva(id){


    }
    listarReservas(){
        //selectbd 
    }

}

module.exports = ReservarService