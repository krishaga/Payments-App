const express = require('express');
const zod = require("zod");
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../models/user');
const { JWT_SECRET } = require('../config');

const signupbody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

const signinbody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});


router.post('/signup', async (req, res) => {
    const { success } = signupbody.safeParse(req.body);
    if (!success)
        return res.status(411).json({
            message: "Incorrect inputs"
        });

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser)
        return res.status(411).json({
            message: "User already exists"
        });

    const dbuser = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    const userId = dbuser._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    });
});





router.post('/signin',(req,res) => {
    const body = req.body;

    const { success } = signinbody.safeParse(body);
    if(!success)
        return res.status(411).json({
            message : "Wrong details"
        })

    const user = User.findOne({
        username : body.username,
        password : body.password
    });
    if(user)
    {
            const token = jwt.sign({
                userId : user._id
            }, JWT_SECRET);
            
            return res.status(200).json({
                message :"succesfull login",
                token : token
            }); 
        }
    return res.status(500).json("Wrong details")
})










module.exports = router;
