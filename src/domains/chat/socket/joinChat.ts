import { io } from '../../../infra/io';

io.on('joinChat', () => {
  console.log('entrou no chat');
});
