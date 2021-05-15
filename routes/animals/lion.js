const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended : true}));
const lionData = [
    {
        breed : 'dangerous',
        color : 'brown',
        id : 1
    },
    {
        breed : 'Indian Lion',
        color : 'yellow-brown',
        id : 2
    },
    {
        breed : 'Australian Lion',
        color : 'dark-yellow-brown',
        id : 3
    }
]
const path = require('path');
router.use(express.json())
router.use(express.urlencoded())
router.get('/' , (req, res) => {
    // res.sendFile(path.join(__dirname , './htmls/lion.html'))
    res.status(200).json(lionData)
})
router.post('/add' , (req, res) => {
    const newLion = {        
            breed : req.body.breed,
            color : req.body.color
    }
    lionData.push(newLion)
    res.status(200).json(lionData)


})
router.put('/update' , (req, res) => {
    const found = lionData.some(lion => lion.color === req.body.color)
    found ? lionData.map(lion => {
        lion.color = req.body.color|| lion.color
        lion.breed = req.body.breed || lion.breed
        res.status(200).json(lionData)
    }) : res.status(200).json({'msg' : 'no lion data found'})
})
router.delete('/delete/:id' , (req , res) =>{

    lionData.map(lion => {
        if(lion.id === parseInt(req.params.id)){
            let index = lionData.indexOf(lion)
            lionData.splice(index, 1)
            res.status(200).json(lionData)
        }
        else{
            res.status(402).json({
                'msg' : 'no lion data found to be deleted'
            })
        }
    })
})
module.exports = router