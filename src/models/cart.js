const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    username:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    address: {
        street:{
            type: String,
            required: true
        },
        number:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        }
    },
    payment:{
        card:{
            number:{
                type: String,
            },
            ccv:{  
                type: String,
                required: true
            }
        }
    }
});

module.exports = mongoose.model('Cart', Schema);