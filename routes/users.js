const express = require('express');
const router = express.Router();


//secondary route path
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//secondary user path
router.get("/getData",function(req,res){
  res.send("user data will be sent here");
});

module.exports = router;
