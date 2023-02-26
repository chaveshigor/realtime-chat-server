import express from 'express';
import CreateUserController from '../domains/user/controllers/createController';

const router = express.Router();

router.post('/', new CreateUserController().handle);

export default router;
