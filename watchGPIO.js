//監聽 GPIO
const Gpio = require('onoff').Gpio;
const watchGPIO = new Gpio(4, 'in','both',{debounceTimeout:300}); 


function startWatch(io) {
  watchGPIO.watch(function(err,value){
    io.emit('message',{err:err,value:value});
  })
}

module.exports = startWatch;