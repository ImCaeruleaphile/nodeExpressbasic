const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(request,response){
  response.sendFile(__dirname+"/number.html");
})
app.post("/",function(request,response){
  var firstNumber=Number(request.body.num1);
  var secondNumber=Number(request.body.num2);

  var result= firstNumber+secondNumber;

  response.send("The total is "+result);
})

app.get("/bmi",function(req,res){
  res.sendFile(__dirname+"/bmi.html");
})
app.post("/bmi",function(req,res){
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);

  var bmi= weight / (height*height);
  res.send("You bmi result is "+ bmi);
})
app.listen(3000,function(){
  console.log('The server is running on port 3000');
})
