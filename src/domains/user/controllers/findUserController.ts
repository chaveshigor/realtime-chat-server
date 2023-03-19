import { Request, Response } from 'express';
import User from '../../../entities/user';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import UserSerializer from '../serializers/userSerializer';
import FindUserUsecase from '../usecases/findUserUsecase';

class FindUserCOntroller implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { username } = req.params;

    const usecase = new FindUserUsecase();
    const user = (await usecase.run({ username })) as User;

    res.status(200).json(new UserSerializer(user).serialize());
  }
}

export default FindUserCOntroller;
