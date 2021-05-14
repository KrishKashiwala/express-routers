const express = require('express')
const router = express.Router();
const tigerRouter = require('./tiger')
const lionRouter = require('./lion')
router.get('/' , (req , res) => {
    res.json({'msg' : 'head on to /name'})
})
router.use('/lion' , lionRouter)
router.use('/tiger' , tigerRouter)
module.exports = router