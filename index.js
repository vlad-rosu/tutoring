const express = require('express');
const app = express();
const router = express.Router();
var path = require('path')
var nodemailer = require('nodemailer');



app.use(express.static(path.join(__dirname, 'public')));

router.get('/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});

router.get('/qualifications',function(req,res){
  res.sendFile(__dirname+'/qualifications.html');
});

router.get('/testimonials',function(req,res){
  res.sendFile(__dirname+'/testimonials.html');
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



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

