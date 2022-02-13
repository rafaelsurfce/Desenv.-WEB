const Reserva = require('../models/reserva');
const reservas = require('./../db/reservas');
const acaoService = require('./acaoService');


const acao = new acaoService();

class ReservarService {
    constructor(){}

    get reserva(){}

    set reserva(reserva){}



    async inserirReserva(cliente, cpf, rg, telefone=null, endereco=null, data, mesa, cadeiras, horaInicial, horaFinal){
        
        try {
            let result;
            const query = await reservas.findOne({mesa: mesa, data: data}).exec();

            
            
            

            if(query != null && horaInicial >= query.horaInicial && horaInicial <= query.horaFinal){
                result = "Já consta uma reserva nessa mesa"
            }
            else if (cliente === null  || cpf === null || rg === null || mesa === null || cadeiras === null || data === null || horaInicial === null || horaFinal === null){
               result = "Existem alguns campos obrigatorios em branco, impossivel reservar"
            }
            else {
                const date = new Date()
                let mes = date.getMonth();
                let ano = date.getFullYear();
                let dia = date.getDate();
                let hora = date.getHours();
                let minuto = date.getMinutes();
                let segundo = date.getSeconds();
                const id = `${mes}${ano}${dia}${hora}${minuto}${segundo}`;
    
                const reserva = new Reserva(id, cliente, cpf, rg, telefone, endereco, mesa, cadeiras, data, horaInicial, horaFinal)
    
                
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
    
                }).then(()=>{ 
                    result="Reserva cadastrada com sucesso" 
                
                console.log("RESERVADO COM SUCESSO")
            }).catch((erro) => {console.log(erro)})
                
                
            }
            return result;
        }  catch (err){ return err}
        



        
        
    }

    async excluirReserva(id){
        try{
            const query = await reservas.deleteOne({id: id}).then(()=>{console.log("Reserva excluida")}).catch((erro)=>{console.log(erro)});

            return query; 



        }catch(erro){ return erro}
    }
    async atualizarReserva(id, cliente, cpf, rg, telefone, endereco, data, mesa, cadeiras, horaInicial, horaFinal){
        try{
            let result;
            const reserva = await reservas.findOneAndUpdate({id: id}, {cliente: cliente, cpf: cpf, rg: rg, telefone: telefone, endereco: endereco, data: data, mesa: mesa, cadeiras: cadeiras, horaInicial: horaInicial, horaFinal: horaFinal}).then(()=>{ 
                console.log( 'atualizado com sucesso') 
            result =  "Atualizado com sucesso" }).catch((erro)=>
            {console.log(erro)
                 result = 'Não foi possivel atualizar' })
            return result;
        }catch(erro){console.log(erro)}


    }
    async listarReservas(){

        try{

            const query = await reservas.find();
            return query;

        }
        catch(erro){ return erro}
        
    }

}

module.exports = ReservarService