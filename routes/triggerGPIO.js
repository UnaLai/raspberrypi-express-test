const express = require('express')
const router = express.Router()

router.get('/trigger-gpio',(req,res,next)=>{
	// res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">送出</button></form>')
})
router.post('/trigger-gpio',(req,res,next)=>{
	// console.log(req)
	// res.redirect('/')
})
module.exports = router;