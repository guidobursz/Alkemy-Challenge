const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> {res.send('main')});

//For login & register
router.use('/auth',require('./auth'));

module.exports = router;