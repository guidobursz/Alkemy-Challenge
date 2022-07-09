const Character = require('../db/models/Character');
//For query
const { Op } = require("sequelize");

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
        // mostarar solo nombre/
};


module.exports = {characterIndex};