const express = require('express')
const router = express.Router()
const Gpio = require('onoff').Gpio;
const LED = new Gpio(4, 'out'); 

router.get('/open-trigger-gpio',(req,res,next)=>{
	LED.writeSync(1);
	res.statusCode('200')
})
router.post('/close-trigger-gpio',(req,res,next)=>{
	LED.writeSync(0);
	res.statusCode('200')
})
module.exports = router;