
const mongoose = require('mongoose');

const reservas = new mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    rg: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
    },
    endereco: {
        type: String
    },
    data: {
        type: String,
        require: true
    },
    mesa: {
        type: Number,
        require: true
    },

    cadeiras: {
        type: Number,
        require: true
    },

    horaInicial: {
        type: Number,
        require: true
    },

    horaFinal: {
        type: Number,
        require: true
    },
    cliente: {
        type: String,
        require: true
    }
    
});



module.exports = mongoose.model('reserva', reservas);