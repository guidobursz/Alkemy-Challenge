const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> {res.send('main')});

//import middlewares
const {checkJWT} = require('../middlewares/checkJWT')


//For login & register
router.use('/auth',require('./auth'));
//For displaying characters
router.use('/api/characters', checkJWT,require('./characters'))
//For displaying movies
router.use('/api/movies', checkJWT, require('./movies'))

//For bulk insert
router.use('/bulk', require('./bulkinsert'));

module.exports = router;