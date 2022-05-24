require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 4000;



const middleWares = require('./middlewares/middlewares');
const routes = require('./Routes/routes');


mongoose.connect(process.env.DATABASE_URL, (err)=>{
    if(!err){
        console.log("Database Connected")
    }else{
        console.log(err);
    }
});

app.use(morgan('common'));
app.use(helmet());
app.use(express.json());
app.use(cors({
    origin : process.env.CORS_ORIGIN
}));


app.use('/app' , routes);
app.use(middleWares.errorHandler);
app.use(middleWares.notFound);

app.listen(port, start);



function start(){
    console.log("Server is up and runnung");
}