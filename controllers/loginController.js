const User = require('../db/models/User')
const bcrypt = require('bcryptjs');

const loginGET = (req,res) => {
    res.send('GET -> login form: need send body fields: email,password')
};

const loginPOST = async (req,res) => {
    //Get data from body
    let email = req.body.email;
    let password = req.body.password;

    const search = await User.findOne({
        where: {
            email: email
        }
    })

    if (search === null) {
        res.send('email not found');
    } else {
        res.send('email found')
    }
}


module.exports = {loginGET, loginPOST}