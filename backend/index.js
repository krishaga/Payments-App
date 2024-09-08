const express = require('express')
const mainRoutes = require('./routes/index');
const PORT = 3000;
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());

const app = express();

app.use("/api/v1" , mainRoutes)


app.listen(PORT, function(err){
    if(err)
        console.log(err);
    console.log("Server listening on Port :",PORT);
})