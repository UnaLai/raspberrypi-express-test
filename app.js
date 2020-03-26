require('dotenv').config()
const app = require('./expess');
var server = require('http').Server(app);
let io = require('./socket')(server); 
require('./watchGPIO')(io)

server.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});