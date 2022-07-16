var jwt = require('jsonwebtoken');


const checkJWT = (req, res, next) => {

    let token = req.headers.authorization;

    if(!token){
        res.send('no auth token')
    }else{
        //console.log('El token es: ', token). EX: Bearer ASDSADSADS
        let tokenCode = token.split(" ").pop(); 
        //check if token is right
        try {
            let tokenData = jwt.verify(tokenCode, process.env.JWT_CODE);
            console.log('tokenData, checkJWT middleware: ', tokenData)
            next()
        } catch (error) {
            res.json({error})
        }
        

    }
}

module.exports = {checkJWT}
