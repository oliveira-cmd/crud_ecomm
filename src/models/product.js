const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productDescription:{
        type: String,
    },
    productQuantity:{
        type: Number,
        required: true
    },
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Product', Schema);