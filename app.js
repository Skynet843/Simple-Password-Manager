const express=require('express');
const adminRouter=require('./routes/admin')
const userRouter=require('./routes/user')
const bodyParser = require('body-parser');
const path = require('path');
app=express();

app.set('view engine', 'ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRouter);

app.use(userRouter)
app.use((req, res)=>{
    res.render('error/404',{pageName:"MyPassword",pageTitle:"404 Error Page"})
})

app.listen(3000);