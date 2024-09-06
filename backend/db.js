const mongoose = require('mongoose')

const dbConnect = () => { 
    mongoose.connect("mongodb+srv://krishagarwal1673:%3CKrishag1622%3E@cluster0.akzsi.mongodb.net/",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}

module.exports({dbConnect})