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
            
            

            console.log(user);
            let result;
            if (user != null && usuario === user.userName){
                result = "já existe um usuário cadastro com esse login, ou cpf";
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
                })
                result = 'usuario cadastrado com sucesso';
                
            }


            
            return result;
        } catch (err){ 'erro '+err}
               
        }
    }


module.exports = FuncionarioService;