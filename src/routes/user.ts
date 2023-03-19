import express from 'express';
import CreateUserController from '../domains/user/controllers/createUserController';
import FindUserController from '../domains/user/controllers/findUserController';

const userRouter = express.Router();

userRouter.get('/:username', new FindUserController().handle);
userRouter.post('/', new CreateUserController().handle);

export default userRouter;
