const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const pollRoutes = require('./routes/pollRoutes');
const socketHandler = require('./utils/socketHandler');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/polls', pollRoutes);

var roles =[];

var students = [];

var polls = [];

// Socket Handler
io.on('connection', (socket) => {
  var questionIndex = 0;
  socketHandler(io, socket);
  socket.on('checkRole', () => {
    console.log('Roles:', roles);
    socket.emit('role', roles[socket.id]);
  });
  socket.on('addRole', (selectedRole) => {
    console.log('Role received:', selectedRole);
    if (roles[socket.id]) {
      socket.emit('role-ack', `Role ${roles[socket.id]} already exists.`);
    }
    else {
      roles[socket.id] = selectedRole;
      console.log('Roles:', roles);
      // Example: Send a confirmation back to the client
      socket.emit('role-ack', `Role ${selectedRole} received successfully.`);
    }
  });
  socket.on('addStudent', (name) => {
    students.push(name);
    console.log('Student added:', name);

  });
  socket.on('addPoll', (pollData) => {
    polls.push(pollData);
    console.log('Poll received:', pollData);
    socket.emit('poll-ack', pollData);
  });
  socket.on('getPoll', () => {
    
    console.log('getPoll received:');
    socket.emit('getPoll-ack', polls[questionIndex]);
    // socket.emit('poll-ack', pollData);
  });
});

server.listen(4000, () => console.log('Server running on port 4000'));
