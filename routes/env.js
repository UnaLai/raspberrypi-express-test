const express = require('express')
const router = express.Router()
const path = require('path');
var fs = require('fs');
let rootDir = path.dirname(process.mainModule.filename);

router.post('/update',(req,res,next)=>{
  let envData = ""
  for(let key in req.body){
    envData = envData + key + '=' + req.body[key] + '\n'
  }
  fs.writeFileSync(path.join(rootDir,'.env'),envData)
  let envFile = fs.readFileSync(path.join(rootDir,'.env'),'utf8')
  console.log(envFile)
  res.send("ok")
})


module.exports = router;