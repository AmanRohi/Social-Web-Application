const User = require('../models/User');

module.exports.signup = function(req,res){
    return res.render('signup',{
        title:'Amylan | Sign Up',
        genre:'signup'
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