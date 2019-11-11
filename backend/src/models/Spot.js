//cadastro

const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    username: String,
    idade: Number,
    parentesco: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'User' 
    }
});

module.exports = mongoose.model('Spot', SpotSchema);