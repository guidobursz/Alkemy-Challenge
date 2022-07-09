const express = require('express');
const app = express();

const sequelize = require('./db/dbconnect');

require('dotenv').config()

//settings
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/main'));

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`);
    //connect to db
    sequelize.sync({force: false})
        .then(
            console.log('Connection to db OK')
        ).catch(err => console.log('Error connecting to DB: ', err))
})