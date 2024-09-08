const express = require('express')

const router = express.router();



router.use('/signup',authenticateJwt,async(req,res) => {

})


module.exports = router