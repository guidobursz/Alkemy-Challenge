const User = require('../db/models/User')
const bcrypt = require('bcryptjs');

const loginGET = (req,res) => {
    res.send('GET -> login form: need send body fields: email,password')
};

const loginPOST = async (req,res) => {
    //Get data from body
    let email = req.body.email;
    let password = req.body.password;
    //if (!req.body.password){password = 'nono'}

    const search = await User.findOne({
        where: {
            email: email
        }
    })

    if (search === null) {
        res.send('email not found');
    } else {
        //Compare the password with the hashed at DB
        let hashedPassword = search.password;
        let passcompared = bcrypt.compareSync(password, hashedPassword);

        if (passcompared === true){
            res.send('FALTA: crear y almacenar jwt para validar login en el acceso al resto de rutas')
        } else {
            res.send('Bad password')
        }
    }
}

module.exports = {loginGET, loginPOST}