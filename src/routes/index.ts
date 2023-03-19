import express from 'express';
import chatRouter from './chat';
import userRouter from './user';
import messageRouter from './message';

const router = express.Router();

router.use('/users', userRouter);
router.use('/users/:userId/chats', chatRouter);

export default router;
