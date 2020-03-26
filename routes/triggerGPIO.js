const express = require('express')
const router = express.Router()
const Gpio = require('onoff').Gpio; 


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

module.exports = router;