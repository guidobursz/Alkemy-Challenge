const Movie = require('../db/models/Movie');
//For query
const { Op, where } = require("sequelize");

//Display characters. /api/movies - with queries
const moviesIndex = async (req,res) => {
/* 
FALTA QUERY POR GENERO

*/
    //Define params for filter
        let tittleFilter = req.query.title || "";
        let cratedAtFilter = req.query.createdat || "";
        let genreFilter = req.query.genre || "";
        let orderTimeFilter = req.query.order || "ASC"; // segunda opt: DESC 

    let moviesData = await Movie.findAll({
        attributes: ['imageMovie', 'title', 'created_at'],
        where: {
            title: {
                [Op.substring]: `${tittleFilter}`,     // LIKE '%hat%'
            },
            created_at: {
                [Op.substring]: `${cratedAtFilter}`
            }
        },
        order: [
            ['created_at', orderTimeFilter]
        ]
    })

    res.json({moviesData})

};

//GET -> Create new movie. /api/movie/create
const movieCreateGET = (req,res) => {
    //Para crear nuevo character, necesito: ImageCharacter, name, age, weight, history
    res.send('GET -> new Character form: need send POST: body fields: ImageMovie, title, created_at, score')
};
//POST -> Create new movie /api/movie/create
const movieCreatePOST = async (req,res) => {
    //Para crear nuevo character, necesito: ImageCharacter, name, age, weight, history
    let imageMovie = req.file.imagemovie;
    let imageMovieName = req.file.filename;
    let title = req.body.title;
    let created_at = req.body.createdat;
    let score = req.body.score;
    console.log(req.file)
    /* 
    {
  fieldname: 'imagemovie',
  originalname: 'Fantasia-Disney.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: '/home/gmb/Documents/GitHub/Alkemy-Challenge/tools/../uploads/pictures',
  filename: 'movie-1657674944998.jpg',
  path: '/home/gmb/Documents/GitHub/Alkemy-Challenge/uploads/pictures/movie-1657674944998.jpg',
  size: 80119
}

    */
    //res.json({imageMovie, title, created_at, score})

    //Create new character & save in DB.
    let newMovie = await Movie.create({
        imageMovie: imageMovieName, title, created_at, score
    }).then(res.json({'New Character': 'OK', imageMovie, title, created_at, score})
    ).catch((e)=> res.send(e))

};

//PATCH => edit a movie. /api/movies/:id/edit
const movieEditPATCH = async (req,res) => {
    // req.params devuelve string, lo paso a number
    let movieId = Number(req.params.id);

        //Recibo el o los campos a modificar en el body: name age weight history
        let newTitle = req.body.title;
        let newCreatedAt = req.body.createdat;
        let newscore = req.body.score;

        let imageMovieName = undefined;
    
        // Check if theres a req file upload, if not value keeps undefined & get no upgrade, if it has value will be the image name
    if(!req.file){
        console.log('no req file')
    }else if (req.file != undefined){
        console.log('Hay req file')
        imageMovieName = req.file.filename
    }


    //Check if all is undefined
    if (newTitle == undefined && newCreatedAt == undefined && newscore == undefined && imageCharacterName == undefined) {
        res.send(`Nothing to change in movie id: ${req.params.id}`)
    } else {
                //Check undefined values, if is not undefined, will update
                if (newTitle != undefined){
                        let updateTitle = await Movie.update({
                            title: newTitle
                        }, {where: {
                                id: movieId
                            }
                        })
                        //res.send('Complete update')
                    }
                if (newCreatedAt != undefined){
                        let updateCreatedAt = await Movie.update({
                            created_at: newCreatedAt
                        }, {where: {
                                id: movieId
                            }
                        })
                        //res.send('Complete update')
                    }
                if (newscore != undefined){
                        let updateScore = await Movie.update({
                            score: newscore
                        }, {where: {
                                id: movieId
                            }
                        })
                        //res.send('Complete update')
                    }
                if (imageMovieName != undefined){
                    let updateProfilePic = await Movie.update({
                        imageMovie: imageMovieName
                    }, {where: {
                            id: movieId
                        }
                    })
                    //res.send('Complete update')
                }

        res.send('Movie updated')
    }
}

//DELETE => edit a movie. /api/movies/:id/delete
const movieDELETE = async (req, res) => {
    // req.params devuelve string, lo paso a number
    let movieId = Number(req.params.id);

    //Delete query
    let movieDelete = await Movie.destroy({
        where: {
            id: movieId
        }
    })

    res.send(`Movie with id: ${req.params.id} was deleted`)

}

//Display movie info by ID. /api/movies/:id/info
const movieInfoGET = async (req,res) => {
/* 
8. Detalle de Película / Serie con sus personajes
Devolverá todos los campos de la película o serie junto a los personajes asociados a la misma
*/

    if (req.params.id != undefined){
        // req.params devuelve string, lo paso a number
        let movieId = Number(req.params.id);
    
        //Get movie info
        let movieInfo = await Movie.findOne({ where: { id: movieId } })
        //Check if search is null
            if (movieInfo === null) {
                res.send('No movie found')
            } else {
                res.json({movieInfo})
            }
    } else {
        res.send('No movie found')
    }

};



module.exports = {moviesIndex, movieCreateGET, movieCreatePOST, movieEditPATCH, movieDELETE, movieInfoGET};