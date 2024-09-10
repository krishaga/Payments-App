const express = require('express');
const zod = require("zod");
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../models/user');
const { JWT_SECRET } = require('../config');
const { authenticate } = require('../middleware/authenticate');
const { Accounts } = require('../models/Accounts');


router.get('/balance',authenticate, async(req,res) => {
    const body = req.userId;
    const data = await Accounts.findOne({
        userId : body
    });
    if(data)
    {
        return res.status(200).json({
            message : "Balance",
            amount : data.balance
        })
    }
    else{
        return res.status(403).json({
            message : "Incorrect Data"
        })
    }
    
})




module.exports = router