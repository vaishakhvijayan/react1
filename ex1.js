var express=require('express');
var app=express();
app.get('/hello',function(req,res){
    res.send("welcome vaishakh");
})
app.listen(4000);