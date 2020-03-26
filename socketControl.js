
function ioModule(server) {
  var io = require('socket.io')(server);
  return io;
}

module.exports = ioModule;