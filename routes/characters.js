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
const uploadCharacterMiddleware = require("../tools/uploadImageMovie")

//Display characters
router.get('/', characterIndex)
//Display info of :id character
router.get('/:id/info', characterInfoGET)
//Create new character
    router.get('/create',characterCreateGET)
    //POST
    router.post('/create', uploadCharacterMiddleware.single('imagecharacter'), characterCreatePOST)
// Mod a character
router.patch('/:id/edit', characterEditPATCH)
// Eliminar a character
router.delete('/:id/delete', characterDELETE)


module.exports = router;