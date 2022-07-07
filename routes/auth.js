const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

//Import controllers
const {loginGET, loginPOST} = require('../controllers/loginController')
const {registerGET, registerPOST} = require('../controllers/registerController')

router.get('/login',loginGET);
router.post('/login',loginPOST)

router.get('/register',registerGET);
router.post('/register',registerPOST)

module.exports = router;