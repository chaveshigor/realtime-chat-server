import express from 'express';
import FindOrCreateController from '../domains/chat/controllers/findOrCreateController';

const chatRouter = express.Router();

chatRouter.post('/:chatId', new FindOrCreateController().handle);

export default chatRouter;
