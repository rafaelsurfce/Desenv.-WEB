
class Reserva {
    constructor (cliente, cpf, rg, telefone=null, endereco=null, mesa, cadeiras, data, horaInicial, horaFinal, id){
        this.cliente=cliente;
        this.cpf=Number(cpf);
        this.rg=Number(rg);
        this.telefone=Number(telefone);
        this.endereco=endereco;
        this.mesa=Number(mesa);
        this.cadeiras=Number(cadeiras);
        this.data=data;
        this.horaInicial=Number(horaInicial);
        this.horaFinal=Number(horaFinal);
        this.id=Number(id);
    }
}

module.exports = Reserva;