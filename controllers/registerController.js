const User = require('../db/models/User')
const bcrypt = require('bcryptjs');

//Registration email logic
const {sendEmail} = require('../tools/registerEmail')

const registerGET = (req,res) => {
    res.send('GET -> Register form: need send body fields: name,lastname,email,password')
};

const registerPOST = async (req,res) => {
    //Get form info
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    try {
        //First, hash password
        let passwordHashed = await bcrypt.hash(password, 8)
        //Insert data to db-User
    const newUser = await User.create({
        name,
        lastname,
        email,
        password: passwordHashed
    });
    let newUserId = newUser.id;
    //Send confirmation email
    const emailFunc = await sendEmail(name,email,newUserId)

    res.send('New user created OK')
    } catch (error) {
        console.log(error)
    }
}

const emailConfirmation = async(req,res) => {

    // req.params devuelve string, lo paso a number
    let userId = Number(req.params.id);

    let updateName = await User.update({
        auth: 1
    }, {where: {
            id: userId
        }
    })
    res.send('Enjoy the API')
}



module.exports = {registerGET, registerPOST, emailConfirmation}