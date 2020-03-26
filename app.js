const express = require('express')
const app = express()
const triggerGPIORoute = require('./routes/triggerGPIO')
// const envRoute = require('./routes/env')
const path = require('path');
const rootDir = path.dirname(process.mainModule.filename);
// 為了 socket 引入
var server = require('http').Server(app);
let io = require('./socketControl')(server); 
// watchGPIO
require('./watchGPIO')(io);



require('dotenv').config()

// 解析 body
app.use(express.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(rootDir,'page/index.html'));
});

io.on('connection', function (socket) {
  socket.emit('news', 'welcome');
  socket.on('message', function (data) {
    console.log(data)
    io.emit('message',data.message);
  });
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


server.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});