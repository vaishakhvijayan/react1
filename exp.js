const express=require('express');
const cors=require ('cors')
const app=express();
const PORT=(7000)
app.use(cors());
app.set('views','./views')
app.set('view engine','ejs')
app.get('/e',(req,res)=>{
    res.render('home',{title:"welcome",message:"vaishakh"});
})
app.listen(PORT)