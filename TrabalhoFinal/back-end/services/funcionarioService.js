const Funcionario = require('../models/funcionario');
const funcionarios = require('./../db/funcionarios');
const mongoose = require('mongoose');

        

class FuncionarioService{
    constructor(){}

    get funcionarios(){}

    set funcionarios(funcionario){}

    async consultarFuncionario(usuario, senha){
        try{
            const query = await funcionarios.findOne({userName: usuario, password: senha}).exec();

            

            if (query !=null && usuario === query.userName && senha === query.password){
                return "usuário logado com sucesso"
            }
            else{
                return "Usuário ou senhas incorreta, ou inexistente"
            }

            

        } catch (err) {return 'Erro '+err}
    }

    async cadastrarFuncionario(nome=null, dataDeNascimento=null, cpf, telefone=null, email=null, usuario, password, confPassword){

        try {
            const user = await funcionarios.findOne({userName: usuario}).exec();
            const cpff = await funcionarios.findOne({cpf: cpf}).exec();
            
            console.log(user)           

            
            let result;
            if ((user != null && usuario === user.userName)||(cpff != null && cpf === cpff.cpf)){
                result = "já existe um usuário cadastro com esse userName, ou CPF";
            }

            else if (cpf === null || usuario === null || password === null || confPassword === null ){
                result = " Campos marcados com * devem ser obrigatorios ";
            }
            else if (password != confPassword){
                result =  " senhas nao correspondem ";
            }

            else {
                const funcionario = new Funcionario(nome, dataDeNascimento, cpf, telefone, email, usuario, password)
                await funcionarios.create({
                    nome: funcionario.nome,
                    dataDeNascimento: funcionario.nascimento,
                    cpf: funcionario.cpf,
                    telefone: funcionario.telefone,
                    email: funcionario.email,
                    userName: funcionario.usuario,
                    password: funcionario.password
                }).then(() => {
                    console.log("cadastro realizado com sucesso")
                }).catch((erro) => {
                    console.log("Erro: "+erro)
                });
                result = 'usuario cadastrado com sucesso';
                
            }


            console.log(result);
            return result;
        } catch (err){ 'erro '+err}
               
        }
    }


module.exports = FuncionarioService;