const express = require('express');
const zod = require("zod");
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../models/user');
const { JWT_SECRET } = require('../config');
const { authenticate } = require('../middleware/authenticate');
const { Accounts } = require('../models/Accounts');

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

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})

const dataBody = zod.object({
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})



router.post('/signup', async (req, res) => {
    const { success } = signupbody.safeParse(req.body);
    if (!success)
        return res.status(400).json({
            message: "Incorrect inputs"
        });

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser)
        return res.status(409).json({
            message: "User already exists"
        });

    const dbuser = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });
    const userId = dbuser._id;

    await Accounts.create({
        userId,
        balance : ((Math.random()*10000)+1).toFixed(2)
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET, { expiresIn : '30d' });

    res.json({
        message: "User created successfully",
        token: token
    });
});





router.post('/signin',async (req,res) => {
    const body = req.body;

    const { success } = signinbody.safeParse(body);
    if(!success)
        return res.status(411).json({
            message : "Wrong details"
        })

    const user = await User.findOne({
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



router.put('/update', authenticate, async(req,res) => {
    const { success } = updateBody.safeParse(req.body);
    if(!success)
    {
        return res.status(403).json({
            message : "Error in updating the details"
        })
    }
    await User.updateOne({ _id : req.userId}, req.body);
    res.json({
        message : "Updated Successfully"
    })
})

router.get('/bulk', authenticate, async (req, res) => {
    const searchTerm = req.query.filter || "";
    const regex = new RegExp(searchTerm, 'i');
    const users = await User.find({
        $or: [
            { firstName: { $regex: regex } },
            { lastName: { $regex: regex } }
        ]
    });

    res.status(200).json({
        users: users
    });
});



router.get('/userdetailbyid', authenticate, async(req,res)=> {
    const queryParam = req.userId;
    const userdetails = await User.find({_id : queryParam})
    if(!userdetails)
        return res.status(409).json({message : "Invalid Data"})
    return res.status(200).json({
        message : "Succesfull",
        userdetails : userdetails});
})
 



module.exports = router;
