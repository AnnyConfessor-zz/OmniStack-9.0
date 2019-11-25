//mostrar as reservas

const mongoose = require('mongoose');

const BokkingSchema = new mongoose.Schema({
    data: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'User' 
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'Spot' 
    }
});

module.exports = mongoose.model('Bokking', BokkingSchema);