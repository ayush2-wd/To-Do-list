const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app= express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine","ejs");

var items = ["Buy Food", "Cook Food","Eat Food"];
var workItems= [];
app.get("/",function(req,res){

   var day= date.getDate();
     res.render("list", {listTitle : day, listAdded : items}); 
});

app.post("/",function(req,res){
   var item =req.body.newItem;
   if(req.body.list === "Work"){
      workItems.push(item); 
      res.redirect("/work");      
   }else{
      items.push(item);
      res.redirect("/");
   }
   
   
}) ;

app.get("/work",function(req,res){
   res.render("list",{listTitle : "Work Items" , listAdded : workItems})
})

app.post("/work",function(reeq,res){
   let item = req.body.newItem;
   workItems.push(item);
   
})

app.get("/about",function(req,res){
   res.render("about");
});

app.listen(3000,function(){
   console.log("Port is running on server 3000");
});