function ioModule(server) {
  var io = require('socket.io')(server);
  io.on('connection', function (socket) {
    socket.emit('news', 'welcome');
    socket.on('message', function (data) {
      console.log(data)
      io.emit('message',data.message);
    });
  });
  return io;
}

module.exports = ioModule;