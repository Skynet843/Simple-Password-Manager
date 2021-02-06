const express=require('express');
const passwordController = require('../controllers/passwords')
const router=express.Router();

// /admin/add-password =>GET
router.get('/add-password',passwordController.getAddPassword);

// /admin/add-password => POST
router.post('/add-password',passwordController.postAddPassword);


module.exports = router;