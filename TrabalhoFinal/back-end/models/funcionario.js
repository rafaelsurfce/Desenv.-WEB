






class Funcionario {
    constructor (nome=null, dataDeNascimento=null, cpf, telefone=null, email=null, usuario, password){
        this.nome=nome;
        this.nascimento=dataDeNascimento;
        this.cpf=Number(cpf);
        this.telefone=Number(telefone);
        this.email=email;
        this.usuario=usuario;
        this.password=password;

    }
}

module.exports = Funcionario;