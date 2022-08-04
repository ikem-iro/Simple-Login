require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 4000;



const middleWares = require('./middlewares/middlewares');
const routes = require('./Routes/routes');

app.use(morgan('common'));
app.use(helmet());
app.use(express.json());
app.use(cors({
    origin : process.env.CORS_ORIGIN
}));
app.use(session({
    secret : "WHateverIdeem fit.",
    resave : false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());



mongoose.connect(process.env.LOCAL_DB_URL, (err)=>{
    if(!err){
        console.log("Database Connected")
    }else{
        console.log(err);
    }
});



app.use('/app' , routes);
app.use(middleWares.errorHandler);
app.use(middleWares.notFound);

app.listen(port, start);



function start(){
    console.log("Server is up and runnung");
}