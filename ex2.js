var express = require('express');
var app = express();
app.get('/hello',function(req,res){
    res.send("welcome rahul");
});
app.post('/hello1',function(req,res){
    res.send("you just called the post method at'/hello'!\n");
})
app.listen(4000);