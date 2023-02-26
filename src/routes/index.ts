import express from 'express';
import chatRouter from './chat';
import userRouter from './user';
import messageRouter from './message';

const router = express.Router();

router.use('/users', userRouter);
router.use('/chat', chatRouter);
router.use('/chats/:chatId/messages', messageRouter);

export default router;
