const User = require('../db/models/User')
const bcrypt = require('bcryptjs');

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
    res.send('New user created OK')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {registerGET, registerPOST}