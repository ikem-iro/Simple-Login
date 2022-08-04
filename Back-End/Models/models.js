
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


const signUpTemplate = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    username:{
        type : String,
      
    },
    email:{
        type:String,
        required : true
    },
    password:{
        type: String,
    
    }
},
{
    timestamps:true
});

signUpTemplate.plugin(passportLocalMongoose);


const UserData = mongoose.model('userdata',signUpTemplate);
passport.use(UserData.createStrategy());
passport.serializeUser(UserData.serializeUser());
passport.deserializeUser(UserData.deserializeUser());

module.exports = UserData;