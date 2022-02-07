const mongoose = require('mongoose');



const acoes = new mongoose.Schema({
    usuario: {
        type: String,
        require: true
    },

    idReserva: {
        type: Number,
        require: true
    },


    acao: {
        type: String,
        require: true
    },


    hora: {
        type: Number,
        require: true
    },


    data: {
        type: String,
        require: true
    },
    icon: {
        type: String

    }
})



module.exports = mongoose.model('acao', acoes);