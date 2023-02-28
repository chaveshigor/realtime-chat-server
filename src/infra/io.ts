import { Server } from "socket.io";
import server from "./httpServer";

const io = new Server(server, { cors: {origin: process.env.CLIENT_URL} });

io.on('connection', (socket) => {
  console.log('alguem conectou', socket.id);
});

export { server, io };
