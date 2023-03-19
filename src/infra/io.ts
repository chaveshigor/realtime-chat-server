import { Server } from 'socket.io';
import server from './httpServer';

const io = new Server(server, { cors: { origin: process.env.CLIENT_URL } });

io.on('connection', async socket => {
  socket.on('joinChat', data => {
    console.log('fulano se juntou ao chat', data.chatId);
    socket.join(`chat${data.chatId}`);
  });

  socket.on('newMessage', data => {
    console.log('nova mensagem', data);
    socket.to(`chat${data.chatId}`).emit('newMessage', data);
  });
});

export { server, io };
