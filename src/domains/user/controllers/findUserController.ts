import { Request, Response } from 'express';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import FindUserUsecase from '../usecases/findUserUsecase';

class FindUserCOntroller implements ApplicationIController {
  // eslint-disable-next-line class-methods-use-this
  async handle(req: Request, res: Response) {
    const { username } = req.params;

    const usecase = new FindUserUsecase();
    const user = await usecase.run({ username });

    res.status(200).json(user);
  }
}

export default FindUserCOntroller;
