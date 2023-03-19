import express from 'express';
import FindOrCreateController from '../domains/chat/controllers/findOrCreateController';
import GetAllChatsController from '../domains/chat/controllers/getAllChatsController';
import messageRouter from './message';

const chatRouter = express.Router({ mergeParams: true });

chatRouter.get('/', new GetAllChatsController().handle);
chatRouter.post('/:chatId', new FindOrCreateController().handle);

chatRouter.use('/:chatId/messages', messageRouter);

export default chatRouter;
