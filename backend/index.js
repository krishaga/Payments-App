require('dotenv').config();
const express = require('express');
const mainRoutes = require('./routes/index');
const { dbConnect } = require('./db');  // Don't forget to call dbConnect to establish a connection
const PORT = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Connect to database
dbConnect();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", mainRoutes);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on Port:", PORT);
});
