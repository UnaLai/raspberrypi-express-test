const express = require('express')
const app = express()
const triggerGPIORoute = require('./routes/triggerGPIO')
const envRoute = require('./routes/env')

require('dotenv').config()

// 解析 body
app.use(express.json())

// 引入 router
app.use(triggerGPIORoute)
app.use(envRoute)

// app.use((req,res,next)=>{
// 	res.status(404).send('<h1>Page not found</h1>')
// })
app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(4000, function () {
  console.log('app listening on port 3000! HIHIHI');
  console.log(process.env.SERVER_HOST);
});