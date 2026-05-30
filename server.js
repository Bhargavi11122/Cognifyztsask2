const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
const userStorage=[];
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/submit',(req,res)=>{
    const user= req.body.username;
    if (!user || user.trim() ==="") {
        return res.render('index',{error:"⚠ fill it" });
    }
    userStorage.push(user);
    console.log('users:',userStorage);
    res.render('index',{name: user});
});
app.listen(3000,()=>{
    console.log(`server runs here:http://localhost:3000`)
});