/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import UserSerializer from '../serializers/userSerializer';
import CreateUserUsecase from '../usecases/createUserUsecase';

class CreateUserController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { name, username } = req.body;

    const usecase = new CreateUserUsecase();
    const newUser = await usecase.run({ name, username });

    res.status(201).json(new UserSerializer(newUser).serialize());
  }
}

export default CreateUserController;
