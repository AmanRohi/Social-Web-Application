const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/sign-up',userController.signup);
router.post('/create-account',userController.createAccount);
router.get('/sign-in',userController.signin);
router.get('/profile',userController.profile);

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/users/sign-in'}),userController.profile);

router.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}));
router.get('/auth/facebook/callback',passport.authenticate('facebook',{failureRedirect:'/users/sign-in'}),userController.profile);

module.exports = router;