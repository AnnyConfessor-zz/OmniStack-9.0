//usuário só com email e senha
//tirar as outras informações depois 
//elas vão para o Spot.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    email: String,
    age: Number
})

module.exports = mongoose.model('User', UserSchema);