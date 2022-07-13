const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> {res.send('main')});

//For login & register
router.use('/auth',require('./auth'));
//For displaying characters
router.use('/api/characters', require('./characters'))
//For displaying movies
router.use('/api/movies', require('./movies'))

//For bulk insert
router.use('/bulk', require('./bulkinsert'));

module.exports = router;