const express = require('express'); //quando chamada cria um novo servidor
const routes = require('./routes') //importando a constante routes criada no arquivo routes.js
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://LAR:dealenca@lar-nyhx4.mongodb.net/projectLar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json()); //a const routes vai ser usada pela função use do express
app.use(routes); 

app.listen(3333); //ouvindo na porta 3333 pela função listem do modulo express

  