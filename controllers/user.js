const Password=require('../models/Password');
exports.getLoginPage=(req,res) => {
    res.render('user/login-password',{pageName:"MyPassword",pageTitle:"Microfarad:Login"})
}

exports.postShowPassword=(req,res) => {
    Password.fetchAll(req.body.key,(pass) => {
        console.log(pass);
        res.render('user/show-password',{pageName:"MyPassword",pageTitle:"Microfarad:Show Password",data:pass});
    })
    
}