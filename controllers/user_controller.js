const User = require('../models/User');
const ResetUser = require('../models/ResetUser');
const crypto  = require('crypto');
const resetPassMailer = require('../mailers/reset_password');

module.exports.signup = function(req,res){
    return res.render('signup',{
        title:'Amylan | Sign Up',
        genre:'signup'
    });
}

module.exports.signin = function(req,res){
    return res.render('signin',{
        title:'Amylan | Sign In',
        genre:'NoheadFoot'
    });
}

module.exports.profile = function(req,res){
    return res.render('main',{
        title:'Profile Page',
        genre:'NoheadFoot'
    });
}


module.exports.createAccount = async function(req,res){
    try{
        if(req.body.confirmPass != req.body.password) {
            // req.flash('error','Confirm Password ans Password need to be same');
            return res.redirect('back');
        }
        let user = await User.findOne({email:req.body.email});
        if(!user){
            let inUser = await User.create({
                name:req.body.name,
                email:req.body.email,
                password: req.body.password
            });
            console.log(inUser);
            return res.redirect('back');
        }
    }catch(error){
        console.log('Error in creating the account ',error);
        return res.redirect('back');
    }
}