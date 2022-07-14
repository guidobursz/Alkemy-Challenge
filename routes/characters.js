const express = require('express');
const router = express.Router();

//Import controllers
const {
    characterIndex,
    characterInfoGET,
    characterCreateGET,
    characterCreatePOST,
    characterEditPATCH,
    characterDELETE
    } = require('../controllers/charactersController');

//Middleware for image
const uploadCharacterImage = require("../tools/uploadImageCharacter")

//Display characters
router.get('/', characterIndex)
//Display info of :id character
router.get('/:id/info', characterInfoGET)
//Create new character
    router.get('/create',characterCreateGET)
    //POST
    router.post('/create', uploadCharacterImage.single('image_character'), characterCreatePOST)
// Mod a character
router.patch('/:id/edit', uploadCharacterImage.single('image_character'), characterEditPATCH)
// Eliminar a character
router.delete('/:id/delete', characterDELETE)


module.exports = router;