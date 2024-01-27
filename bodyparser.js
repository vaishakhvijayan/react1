const bodyparser= require('body-parser');
const express=require('express');
const app= express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.get("/user",(req,res)=>{
    res.send(`<form method="POST">
    <div><input name="user name"/></div>
    <br><br>
    <div><input name="email name"</div>
    <br>
    <div><button>add</button></div>
    </form>`);
});
app.post("/user",(req,res)=>{
    console.log("body parser used",req.body);
    console.log('post request');
});
app.listen(5000);