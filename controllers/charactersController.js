const Character = require('../db/models/Character');
//For query
const { Op, where } = require("sequelize");
const { findOne } = require('../db/models/Character');

//Display characters. /api/character
const characterIndex = async (req,res) => {
/*
Búsqueda de Personajes
Deberá permitir buscar por nombre, y filtrar por edad, peso o películas/series en las que participó.
Para especificar el término de búsqueda o filtros se deberán enviar como parámetros de query:
● GET /characters?name=nombre
● GET /characters?age=edad
● GET /characters?movies=idMovie
*/
    //Define params for filter
    let namefilter = req.query.name || "";
    let agefilter = req.query.age || "";
    let weightfilter = req.query.weight || "";
    //falta filtro para peliculas.

    const characters = await Character.findAll({
        attributes: ['imageCharacter', 'name'],
        where: {
            name: {
                [Op.substring]: `${namefilter}`,     // LIKE '%hat%'
            },
            age: {
                [Op.substring]: `${agefilter}`
            },
            weight: {
                [Op.substring]: `${weightfilter}`
            }
        }
    });
    res.json({characters})

    //FALTA:
        //query por pelis asociadas
};

//Display character info by ID. /api/character/:id/info
const characterInfoGET = async (req,res) => {
    /*    En el detalle deberán listarse todos los atributos del personaje, como así también sus películas o
series relacionadas.

FALTA: mostrar las peliculas en las que figura
 */

    if (req.params.id != undefined){
        // req.params devuelve string, lo paso a number
        let characterId = Number(req.params.id);
    
        //Get character info
        let characterInfo = await Character.findOne({ where: { id: characterId } })
        //Check if search is null
            if (characterInfo === null) {
                res.send('No character found')
            } else {
                res.json({characterInfo})
            }
    } else {
        res.send('No character found')
    }

};

//GET -> Create new character. /api/character/create
const characterCreateGET = (req,res) => {
    //Para crear nuevo character, necesito: ImageCharacter, name, age, weight, history
    res.send('GET -> new Character form: need send body fields: ImageCharacter, name, age, weight, history')
};
//POST -> Create new character /api/character/create
const characterCreatePOST = async (req,res) => {
    //Need inputs: ImageCharacter, name, age, weight, history  // Input name for character image upload = imagecharacter
    let imageCharacterName = req.file.filename;
    let name = req.body.name;
    let age = req.body.age;
    let weight = req.body.weight;
    let history = req.body.history;

    console.log(req.file);

    //Create new character & save in DB.
    let newCharacter = await Character.create({
        imageCharacter: imageCharacterName,
        name,
        age,
        weight,
        history
    }).then(res.json({'New Character': 'OK', name,age,weight,history})
    )
    .catch((e)=> res.send(e))

};

//PATCH => edit a character. /api/characters/:id/edit
const characterEditPATCH = async (req,res) => {
    // req.params devuelve string, lo paso a number
    let characterId = Number(req.params.id);

        //Recibo el o los campos a modificar en el body: name age weight history
        let newName = req.body.name;
        let newAge = req.body.age;
        let newWeight = req.body.weight;
        let newHistory = req.body.history;
        let imageCharacterName = undefined;
    
        // Check if theres a req file upload, if not value keeps undefined & get no upgrade, if it has value will be the image name
    if(!req.file){
        console.log('no req file')
    }else if (req.file != undefined){
        console.log('Hay req file')
        imageCharacterName = req.file.filename
    }

    //Check if all is undefined                                                                                    
    if (newName == undefined && newAge == undefined && newWeight == undefined && newHistory == undefined && imageCharacterName == undefined) {
        res.send(`Nothing to change in character id: ${req.params.id}`)
    } else {
                //Check undefined values, if is not undefined, will update
                if (newName != undefined){
                        let updateName = await Character.update({
                            name: newName
                        }, {where: {
                                id: characterId
                            }
                        })
                        //res.send('Complete update')
                    }
                if (newAge != undefined){
                        let updateAge = await Character.update({
                            age: newAge
                        }, {where: {
                                id: characterId
                            }
                        })
                        //res.send('Complete update')
                    }
                if (newWeight != undefined){
                        let updateWeight = await Character.update({
                            weight: newWeight
                        }, {where: {
                                id: characterId
                            }
                        })
                        //res.send('Complete update')
                    }
                if (newHistory != undefined){
                        let updateHistory = await Character.update({
                            history: newHistory
                        }, {where: {
                                id: characterId
                            }
                        })
                        //res.send('Complete update')
                    }
                    if (imageCharacterName != undefined){
                        let updateProfilePic = await Character.update({
                            imageCharacter: imageCharacterName
                        }, {where: {
                                id: characterId
                            }
                        })
                        //res.send('Complete update')
                    }
        res.send('Character updated')
    }
}

//DELETE => edit a character. /api/characters/:id/delete
const characterDELETE = async (req, res) => {
    // req.params devuelve string, lo paso a number
    let characterId = Number(req.params.id);

    //Delete query
    let characterDelete = await Character.destroy({
        where: {
            id: characterId
        }
    })

    res.send(`Character with id: ${req.params.id} was deleted`)

}


module.exports = {characterIndex, characterCreateGET, characterCreatePOST, characterEditPATCH, characterDELETE, characterInfoGET};