const express = require('express');

const userController=require('../controllers/user');

const router = express.Router();

router.get('/',userController.getLoginPage);


router.post('/show-password',userController.postShowPassword);

module.exports = router;