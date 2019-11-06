//página de cadastro

const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    username: String,
    parentesco: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'User' 
    }
});

module.exports = mongoose.model('Spot', UserSchema);