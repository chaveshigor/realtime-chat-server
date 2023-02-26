import express from 'express';
import GetAllMessagesController from '../domains/message/controllers/getAllMessagesController';
import CreateMessageController from '../domains/message/controllers/createMessageController';

const messageRouter = express.Router({ mergeParams: true });

messageRouter.get('/', new GetAllMessagesController().handle);
messageRouter.post('/new', new CreateMessageController().handle);

export default messageRouter;
