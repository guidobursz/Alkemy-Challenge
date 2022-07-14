const express = require('express');
const router = express.Router();

//import controller
const {insertUser,insertCharacter,insertMovie, insertGenres} = require('../controllers/bulkController');


router.get('/users', insertUser);
router.get('/characters', insertCharacter);
router.get('/movies', insertMovie);
router.get('/genres', insertGenres);

module.exports = router;