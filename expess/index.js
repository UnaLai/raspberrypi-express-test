const express = require('express')
const app = express()
const path = require('path');
const rootDir = path.dirname(process.mainModule.filename);
const triggerGPIORoute = require('../routes/triggerGPIO')
// const envRoute = require('../routes/env')


// 解析 body
app.use(express.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(rootDir,'page/index.html'));
});

// 把 io 放入 req 給大家用
// app.use(function(req,res,next){
//   req.io = io;
//   next();
// })

// 引入 router
app.use(triggerGPIORoute)
// app.use(envRoute)

// app.use((req,res,next)=>{
// 	res.status(404).send('<h1>Page not found</h1>')
// })


module.exports = app;