const express = require('express');
const router = express.Router();

//Import controllers
const {characterIndex} = require('../controllers/charactersController');

router.get('/', characterIndex)

module.exports = router;