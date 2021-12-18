const passport = require('passport');
const fbStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');
const crypto = require('crypto');


passport.use( new fbStrategy({
        clientID:'244393481135315',
        clientSecret:'7de4d4cfc730dd73e35a1d0ee0e563bc',
        callbackURL:'http://localhost:8000/users/auth/facebook/callback',
        profileFields:['id','displayName','name','email','gender'],
    },
    function(accessToken,refreshToken,profile,done){
        console.log(profile);
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
        })
    }
));

module.exports = passport;
