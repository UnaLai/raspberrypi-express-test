const express = require('express')
const app = express()
// const triggerGPIORoute = require('./routes/triggerGPIO')

// 解析 body
app.use(express.json())
// app.use(triggerGPIORoute)
// app.use((req,res,next)=>{
// 	res.status(404).send('<h1>Page not found</h1>')
// })
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('app listening on port 3000! HIHIHI');
});