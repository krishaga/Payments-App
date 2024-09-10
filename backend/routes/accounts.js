const express = require('express');
const router = express.Router();
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


router.post('/transfer', authenticate, async (req, res) => {
    const session = await mongoose.startSession();
    session.startSession();
    const { amount , to } = req.body;
    const sender = await Accounts.findOne(req.userId).session(session);
    if(!sender || sender.balance < amount){
        await session.abortTransaction();
        return res.status(404).json({
            message : "Insufficient Balance"
        })
    }
    const reciever = await Accounts.findOne(body.to).session(session);
    
    if(!reciever){
        await session.abortTransaction();
        return res.status(403).json({
            message : "Invalid Reciever"
        })
    }

    await Accounts.updateOne({
        userId : req.userId
    },
    {
        $inc : {
            balance : -amount
        }
    }).session(session)

    await Accounts.updateOne({
        userId : to
    },
    {
        $inc : {
            balance : amount
        }
    }).session(session)

    await session.commitTransaction();
    
    res.status(200).json({
        message : "Transaction Successful"
    })
})


module.exports = router