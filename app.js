var express = require('express');
var mongoose =require('mongoose');
var app = express();

var User =require('./model/user');


app.use(express.json());
/* middleware
app.use=(rer,res,next)=>{
    next();
    console.log('Welocome to my middle ware')
}
app.use(middle);*/

app.get('/',(req,res)=>{
    res.send('first page');
})
 app.get('/user',(req,res)=>{
     let user =["arjun","harsh","rushi"];
     res.send({
     "user": user});
 })

 app.post('/createuser',async(req,res)=>{
     try{
         var myuser = new User(req.body);
         await myuser.save();
         res.send(myuser);
     //console.log(req.body.name);
     //console.log(req.body.age);
     res.send('created success user')
     }
     catch(err) {
            res.send({message : err})
     }
 })

mongoose.connect('mongodb+srv://arjun:123@cluster0.q5f0w.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true},
(req,res)=>{
    console.log('Database connected');
});

app.listen(9000,()=>{
    console.log('server is connected');
})