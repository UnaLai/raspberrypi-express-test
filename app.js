const express = require('express')
const app = express()
const triggerGPIORoute = require('./routes/triggerGPIO')
const envRoute = require('./routes/env')
const path = require('path');
const rootDir = path.dirname(process.mainModule.filename);


require('dotenv').config()

// 解析 body
app.use(express.json())

// 允許任何
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 引入 router
app.use(triggerGPIORoute)
app.use(envRoute)

app.get('/', function (req, res) {
  res.sendFile(path.join(rootDir,'page/index.html'));
});

// app.use((req,res,next)=>{
// 	res.status(404).send('<h1>Page not found</h1>')
// })


app.listen(4000, function () {
  console.log('app listening on port 4000!');
});