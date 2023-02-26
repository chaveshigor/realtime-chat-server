import express from 'express';
import chatRouter from './chat';
import userRouter from './user';

const router = express.Router();

router.use('/user', userRouter);
router.use('/chat', chatRouter);

export default router;
