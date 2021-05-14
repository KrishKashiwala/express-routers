
const express = require('express');
const router = express.Router();
router.get('/' , (req, res) => {
    res.json({'msg' : 'inside tiger cage!!'})
})
module.exports = router;