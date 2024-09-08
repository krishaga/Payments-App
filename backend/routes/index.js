const express = require ('express')
const router = express.router();
const userRouter = require('./routes/user');


router.use('/user', userRouter)


module.exports = router;