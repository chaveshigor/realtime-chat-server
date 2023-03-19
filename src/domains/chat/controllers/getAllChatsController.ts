import { Request, Response } from 'express';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import GettAllChatsUsecase from '../usecases/getAllChatsUsecase';

class FindOrCreateChatController implements ApplicationIController {
  // eslint-disable-next-line class-methods-use-this
  async handle(req: Request, res: Response) {
    const { userId } = req.params;

    const usecase = new GettAllChatsUsecase();
    const allChats = await usecase.run(Number(userId));

    res.status(200).json(allChats);
  }
}

export default FindOrCreateChatController;
