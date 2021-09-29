const express = require('express')
const animalRouter  = require('./animals')
const router = express.Router();
router.get('/' , (req , res) => {
    res.json({'msg' : 'head on to /animals'})
})

router.use('/animals' , animalRouter)
module.exports = router 
