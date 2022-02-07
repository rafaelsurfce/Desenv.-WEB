const Funcionario = require('../models/funcionario');
const funcionarios = require('./../db/funcionarios');
const mongoose = require('mongoose');









        

class FuncionarioService{
    constructor(){}

    get funcionarios(){}

    set funcionarios(funcionario){}

    




    consultarFuncionario(usuario, senha){


        const query = funcionarios.find({}).exec();
        
        console.log(query)
        const consulta= null;
        
        
        


        if (usuario === consulta && senha === consulta){
            return "usuário logado"
        }
        else {
            return "Usuário ou senhas incorreta, ou inexistente"
        }
    }

    cadastrarFuncionario(nome=null, dataDeNascimento=null, cpf, telefone=null, email=null, usuario, password, confPassword){


        
         const consulta = funcionarios.findOne({cpf: Number(cpf), usuario: usuario})
    
        if (usuario === consulta.usuario || Number(cpf) === consulta.cpf){
            return "já existe um usuário cadastro com esse login, ou cpf";
        }
        else if (cpf === null || usuario === null || password === null || confPassword === null ){
            return " Campos marcados com * devem ser obrigatorios ";
        }
        else if ( password != confPassword){
            return "senhas não correspodem";

        }
        else {
            const funcionario = new Funcionario(nome, dataDeNascimento, cpf, telefone, email, usuario, password)
            

            let result;
            funcionarios.create({
                nome: funcionario.nome,
                dataDeNascimento: funcionario.nascimento,
                cpf: funcionario.cpf,
                telefone: funcionario.telefone,
                email: funcionario.email,
                userName: funcionario.usuario,
                password: funcionario.password
            }).save().then(() => {
                result = 'usuario cadastrado com sucesso'
                console.log(result)
            }).catch((err) =>{
                result = 'Houve um erro ao registar o usuário: ' + err
                console.log(result)
            });


            return result;
        }
    }
}

module.exports = FuncionarioService;