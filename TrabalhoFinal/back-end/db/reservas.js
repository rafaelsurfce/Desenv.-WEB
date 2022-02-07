
const mongoose = require('mongoose');

const reservas = new mongoose.Schema({
    cliente: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
        require: true
    },
    rg: {
        type: Number,
        require: true
    },
    telefone: {
        type: Number,
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
    id: {
        type: Number,
        require: true
    }
});



module.exports = mongoose.model('reserva', reservas);