// socket.js
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000', {
  autoConnect: true, // Connect manually when needed
});

socket.on('connect', () => {
  console.log('Connected to the server');
});
socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});
socket.on('role-ack', (message) => {
  console.log('Role Acknowledgement:', message);
});
socket.on('checkRole', (message) => {
  console.log('Role Acknowledgement:', message);
});
// Export the socket instance for use across components
export default socket;
