const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;

//Database
mongoose.connect('mongodb://127.0.0.1:27017/parkdb', {useNewUrlParser: true })
.then(() => console.log(`Connected to database`))
.catch(err => console.log(err))

//Show which port we are on 
app.listen(PORT, () => {
    console.log(`Running COVID ASS SERVER on port ${PORT}`);
});
//logging
app.use(logger('dev'));

//parse responses
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

require("./api-routes.js")(app);