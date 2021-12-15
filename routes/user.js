const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/sign-up',userController.signup);
router.post('/create-account',userController.createAccount);
router.get('/sign-in',userController.signin);


module.exports = router;