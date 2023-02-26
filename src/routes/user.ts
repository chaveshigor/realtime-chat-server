import express from 'express';
import FindOrCreateController from '../domains/user/controllers/findOrCreateController';

const userRouter = express.Router();

userRouter.post('/', new FindOrCreateController().handle);

export default userRouter;