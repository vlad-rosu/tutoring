const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static('.'));

router.get('/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});

router.get('/qualifications',function(req,res){
  res.sendFile(__dirname+'/qualifications.html');
});

router.get('/contact',function(req,res){
  res.sendFile(__dirname+'/contact.html');
});

router.get('*',function(req,res){
  res.sendFile(__dirname+'/about.html');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

