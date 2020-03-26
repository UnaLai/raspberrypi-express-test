const express = require('express')
const router = express.Router()
const Gpio = require('onoff').Gpio;
// const watchGPIO = new Gpio(4, 'in','both',{debounceTimeout:300}); 


router.get('/open',(req,res,next)=>{
	const LED1 = new Gpio(4, 'out'); 
	LED1.writeSync(1);
	res.send("ok")
})
router.get('/close',(req,res,next)=>{
	const LED1 = new Gpio(4, 'out'); 
	LED1.writeSync(0);
	res.send("ok")
})

// watchGPIO.watch(function(err,value){
// 	console.log(err,value)
// })
module.exports = router;