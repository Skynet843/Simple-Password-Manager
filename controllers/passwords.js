const Password=require("../models/Password")
const crypto=require("../util/crpyto");
var md5 = require('md5');
exports.getAddPassword=(req, res, next) => {
    res.render('admin/add-password',{pageName:"AddPassword",pageTitle:"Microfarad:Add Password"});
}

exports.postAddPassword=(req, res, next) => {
    const key=md5(req.body.key);
    const username=crypto.encrypt(req.body.username,key);
    const password=crypto.encrypt(req.body.password,key);
    const websiteName=crypto.encrypt(req.body.websiteName,key);
    const Data = new Password(username,websiteName,password,key);
    Data.save();
    res.redirect('/admin/add-password')
}