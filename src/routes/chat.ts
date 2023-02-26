import express from 'express';
import FindOrCreateController from '../domains/chat/controllers/findOrCreateController';
import GetAllChatsController from '../domains/chat/controllers/getAllChatsController';

const chatRouter = express.Router();

chatRouter.get('/:userId', new GetAllChatsController().handle);
chatRouter.post('/:chatId', new FindOrCreateController().handle);

export default chatRouter;
