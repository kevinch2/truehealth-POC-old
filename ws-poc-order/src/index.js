const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

const socket = io('http://127.0.0.1:3030');
//const app = feathers();

// Set up Socket.io client with the socket
app.configure(socketio(socket));

//Handling a new order
socket.on('gateway created', data => {
  console.log('Order service got an new order:' + JSON.stringify(data));
});

server.on('listening', () =>
  logger.info('ORDER application started on http://%s:%d', app.get('host'), port)
);