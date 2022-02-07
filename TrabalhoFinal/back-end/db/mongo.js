const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/trabalhofinal').then(() => {
    console.log('MongoDB conectado');

}).catch((err) => {
    console.log("Houve um erro ao se conectar com o mongoDB " + err);
});

module.exports = mongoose;

// criando os model









