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

            console.log(query)

            if (query!=null && usuario === query.userName && senha === query.password){
                return "usuário logado com sucesso"
            }
            else{
                return "Usuário ou senhas incorreta, ou inexistente"
            }

            

        } catch (err) {return 'Erro '+err}
    }

    async cadastrarFuncionario(nome=null, dataDeNascimento=null, cpf, telefone=null, email=null, usuario, password, confPassword){

        try {
            const query = await funcionarios.findOne({userName: usuario, cpf: cpf}).exec();

            console.log(query);
            let result;
            if (query !=null && usuario === query.userName || cpf === query.cpf){
                result = "já existe um usuário cadastro com esse login, ou cpf";
            }
            else if (cpf === null || usuario === null || password === null || confPassword === null ){
                result = " Campos marcados com * devem ser obrigatorios ";
            }
            else if (password != password){
                result =  " senhas nao correspondem ";
            }

            else {
                const funcionario = new Funcionario(nome, dataDeNascimento, cpf, telefone, email, usuario, password)
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
                    result = 'Houve um erro ao registrar o usuário: ' + err
                    console.log(result)
                });
                
            }


            
            return result;
        } catch (err){ 'erro '+err}
               
        }
    }


module.exports = FuncionarioService;