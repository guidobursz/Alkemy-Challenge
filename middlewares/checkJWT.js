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
            //tokenData, checkJWT middleware:  { id: 11, name: 'Guido Manuel', auth: true, iat: 1658006192 }

            if(tokenData.auth === true){
                console.log('User con auth true')
                next()
            } else{
                res.send('User has no auth')
            }
        } catch (error) {
            res.json({error})
        }
        

    }
}

module.exports = {checkJWT}
