
const mongoose = require('mongoose');


const signUpTemplate = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName:{
        type : String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    password:{
        type: String,
        required: true   
    }
},
{
    timestamps:true
});

const UserData = mongoose.model('UserData',signUpTemplate);

module.exports = UserData;