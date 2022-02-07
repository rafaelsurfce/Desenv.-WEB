const mongoose = require('./mongo');


const funcionarios = new mongoose.Schema({
    nome: {
        type: String
    },
    dataDeNascimento: {
        type: String
    },
    cpf: {
        type: String,
        require: true
    },
    telefone: {
        type: Number
    },
    email: {
        type: String
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});



module.exports = mongoose.model('funcionario', funcionarios);