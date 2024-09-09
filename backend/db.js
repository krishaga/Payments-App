const mongoose = require('mongoose');

const dbConnect = () => { 
  mongoose.connect("mongodb+srv://krishagarwal1673:%23Krishag1622@cluster0.akzsi.mongodb.net/Paytm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000  // Adjust timeout as needed
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB', err);
  });
}

module.exports = { dbConnect };
