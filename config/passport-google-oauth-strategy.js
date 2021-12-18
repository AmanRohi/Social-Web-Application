const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/User');

passport.use(new googleStrategy({
    clientID:'329682565160-hf9otnc4b1ic45speil41dio53vt472e.apps.googleusercontent.com' ,
    clientSecret:'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',
    callbackURL:'http://localhost:8000/users/auth/google/callback'
    },
    function(accessToken,refreshToken,profile,done){
        User.findOne({email:profile.emails[0].value},function(err,user){
            if(err){console.log('Error in finding the User ',err); return done(err);}
            if(user) return done(null,user);
            else {
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                },function(err,newUser){
                    if(err){console.log('Error in Creating the user',err); return;}
                    return done(null,newUser);
                });
            }
        });
    }
));


module.exports = passport;