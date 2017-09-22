var Rx = require('rxjs/Rx');
var io = require('socket.io')(3001);

var observer;
var source = Rx.Observable.create((ob) => {
  observer = ob;
});

var pub = source.publish();

pub.connect();

io.on('connection', (socket) => {
  pub.subscribe({
    next: (data) => {
      socket.emit('message',data.nickname + ': ' + data.message);
    },
    error: (error) => {},
    complete: () => {}});

  socket.on('message', (data) => {
    observer.next(data);
  })
});
