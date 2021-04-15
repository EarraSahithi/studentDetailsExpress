const express = require('express');
const router = express.Router();

//first step for writing files -imported fs modules from node.js
const fs=require("fs");
//const { reset } = require("nodemon");
//const { response }=require("../app");


console.log("current directory for saving data",`${__dirname}/data`);
const folderPath=`${__dirname}/data`;
//secondary route path
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('character secondary path');
});


//secondary user path
router.get("/getDetails",function(req,res){
  fs.readFile(`${folderPath}/student.json`,function(err,data){
    if(err){
      console.log("error",err);
    }
    else{
      const dataFromFile=JSON.parse(data);
      console.log("data read from file",dataFromFile);
      res.send(dataFromFile);
    }
  });
});

router.post("/add",function(req,res){
    console.log("Data from client side",req.body);
    const studentData=req.body;
    //use write file method
    fs.writeFile(`${folderPath}/student.json`, 
    JSON.stringify(studentData),
    function(err){
      if(err){
        console.log("error in writing file",err);
      }
      else{
        console.log("file written successfully");
        res.send({result:"success"});
      }
    })
    
});


//export route
module.exports = router;