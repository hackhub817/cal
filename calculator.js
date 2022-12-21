const express = require("express");
const app=express();
const bodyP= require("body-parser");

app.use(bodyP.urlencoded({extended: true}));
app.get("/",function(req,res){
 res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
   var num1=Number(req.body.n1);
   var num2=Number(req.body.n2);
   var re=num1+num2;
    res.send("the answer is"+ re);
})

app.listen(5000,function(){
    console.log("app is running at port 5000");
});