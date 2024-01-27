var express=require('express');
var app=express();
app.get("/",(req,res,next)=>{
    console.log("hello");
    next();
},(req,res)=>{
    res.send("welcome");
});
app.listen(4000);