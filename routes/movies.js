const express = require('express');
const router = express.Router();

//Import controllers
const {
    moviesIndex,
    movieInfoGET,
    movieCreateGET,
    movieCreatePOST,
    movieEditPATCH,
    movieDELETE
    } = require('../controllers/moviesController');


//Display movies
router.get('/', moviesIndex)
//Display info of :id character
router.get('/:id/info', movieInfoGET)
//Create new character
    router.get('/create',movieCreateGET)
    //POST
    router.post('/create',movieCreatePOST)
// Mod a character
router.patch('/:id/edit', movieEditPATCH)
// Eliminar a character
router.delete('/:id/delete', movieDELETE)


module.exports = router;