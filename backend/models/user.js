const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        minLength : 5,
        maxLength : 20,
        lowercase : true
    },
    firstName : {
        type : String,
        trim : true,
        maxLength : 50,
        required : true
    },
    lastName : {
        type : String,
        trim : true,
        maxLength : 50,
        required : true
    },
    password : {
        type : String,
        maxLength : 50,
        required : true
    },
    mobileNo : {
        type : String,
        trim : true,
        length : 10,
        required : true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User };