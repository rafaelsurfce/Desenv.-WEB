
class Reserva {
    constructor (id, cliente, cpf, rg, telefone=null, endereco=null, mesa, cadeiras, data, horaInicial, horaFinal){
        this.cliente=cliente;
        this.cpf=cpf;
        this.rg=rg;
        this.telefone=Number(telefone);
        this.endereco=endereco;
        this.mesa=Number(mesa);
        this.cadeiras=Number(cadeiras);
        this.data=data;
        this.horaInicial=Number(horaInicial);
        this.horaFinal=Number(horaFinal);
        this.id=id;
    }
}

module.exports = Reserva;