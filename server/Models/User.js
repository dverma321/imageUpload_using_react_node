const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email : {
        type : String,
        required: true
    },

    password : {
        type : String,
        required: true
    },

    cpassword : {
        type : String,
        required: true
    }
})

const Users = mongoose.model('Person', userSchema);

module.exports = Users