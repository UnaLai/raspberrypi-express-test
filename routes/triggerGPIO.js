const express = require('express')
const router = express.Router()
const Gpio = require('onoff').Gpio;
const LED = new Gpio(4, 'out','rising'); 
const button = new Gpio(17, 'in','both',{debounceTimeout:300}); 


router.get('/open',(req,res,next)=>{
	LED.writeSync(1);
	res.send("ok")
})
router.get('/close',(req,res,next)=>{
	LED.writeSync(0);
	res.send("ok")
})

button.watch(function(err,value){
	console.log(err,value)
})
module.exports = router;