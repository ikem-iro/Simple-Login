const {Router} = require('express');

const router = Router();
const bcrypt = require('bcrypt');
const signUpTemplateCopy = require('../Models/models');
const UserData = require('../Models/models');
const { default: mongoose } = require('mongoose');

const saltRounds = 10;

router.route('/')
.get((req,res)=>{
    res.send("Hello World");
})

router.route("/Register")
.get((req,res)=>{

})
.post( async (req,res,next)=>{
    try{
         bcrypt.hash(req.body.password, saltRounds, (err,hash)=>{
            const user = new signUpTemplateCopy({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                userName : req.body.username,
                email : req.body.email,
                password : hash
            });
            user.save();
            console.log(user);

            const createdUser = user;
            res.json({
                username: createdUser.userName,
                firstName: createdUser.firstName,
                lastName: createdUser.lastName
            })
        
        })
        
    }catch(error){
        if(error.constructor.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
        
    }
    
})


router.route('/Login')
.post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    UserData.findOne({userName : username},(err,foundUser)=>{
        if (err){
            console.log(err);
        }
        else if(!foundUser){
            console.log("Username mismatch");
        }
        else{
            if (foundUser){
                bcrypt.compare(password, foundUser.password, (err, result)=>{
                    if(result === true){
                        console.log("Logged in successfully");
                        res.send({message:"login sucess",user:foundUser,})
                    }else{
                        console.log("Wrong username or password");
                        res.send({message:"wrong credentials"})
                    }
                } )
            }
        }
        
    })
})

module.exports = router;