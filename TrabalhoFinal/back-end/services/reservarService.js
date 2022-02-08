const Reserva = require('../models/reserva');
const reservas = require('./../db/reservas');
const acaoService = require('./acaoService');




const date = new Date()

const acao = new acaoService();






class ReservarService {
    constructor(){}

    get reserva(){}

    set reserva(reserva){}



    async inserirReserva(cliente, cpf, rg, telefone=null, endereco=null, data, mesa, cadeiras, horaInicial, horaFinal){
        
        try {

            const query = await reservas.findOne({mesa: mesa, data: data}).exec();

            console.log(query)

            if(query != null && horaInicial >= query.horaInicial && horaInicial <= query.horaFinal){
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
                const id = `${mes}${ano}${dia}${hora}${minuto}${segundo}`;
    
                const reserva = new Reserva(id, cliente, cpf, rg, telefone, endereco, mesa, cadeiras, data, horaInicial, horaFinal)
    
                let result;
                await reservas.create({
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
    
                })
                return 'reserva cadastrada com sucesso'
            }

        }  catch (err){ return err}
        



        
        
    }
    procurarReserva(id){
        //select bd
    }
    excluirReserva(id){
        
    }
    atualizarReserva(id){


    }
    async listarReservas(){

        try{

            const query = await reservas.findOne().exec();
            console.log(query);
            return query;

        }
        catch(erro){ return erro}
        
    }

}

module.exports = ReservarService