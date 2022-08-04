const express = require('express');
const passport = require('passport');
const router = express.Router();

const UserData = require('../Models/models');

router.route('/Register')
    .post((req, res) => {
        const userpassword = req.body.password;
        const user = new UserData({
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email,
            username : req.body.username,
           
        });
        UserData.register(user , userpassword, (err,rUser)=>{
            if(err){
                console.log(err);
                res.send(err.message);
            }else{
                passport.authenticate('local')(req,res,()=>{
                    console.log("Registered successfully");
                    console.log(rUser);
                   
                    res.send({status : "Registered Successfully"});
                    
                });
            }
        })
    })

router.route('/Login')
.post((req,res)=>{
    const user = new UserData({
        username : req.body.username,
        password : req.body.password
    });
    req.login(user, (err)=>{
        if(err){
            res.send(err);
        }else{
            passport.authenticate('local')(req,res,()=>{
           
                res.send({status : "Login Sucess"});
                console.log("Login Sucess");
            })
        }
    })
})


router.route('/Home')
.get((req,res)=>{
    if(req.isAuthenticated()){
        res.send({message : "Authenticated"})
        // Allow access to home page
    }else{
        res.send({message : "Not authenticated"})
        // reroute to login page
    }
})



module.exports = router;