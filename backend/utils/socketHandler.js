module.exports = (io, socket) => {
    console.log('New connection:', socket.id);
  
    socket.on('submitAnswer', (data) => {
      const { pollId, answer } = data;
      if (polls[pollId]) {
        polls[pollId].answers.push(answer);
        io.emit('pollUpdated', polls[pollId]);
      }
    });
  
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  };
  