const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    userId : { 
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'User' },
    balance : {
        type : Number
    }
})

const Accounts = mongoose.model('Accounts',accountSchema)

module.exports =  { Accounts }