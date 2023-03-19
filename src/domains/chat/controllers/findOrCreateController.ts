import { Request, Response } from 'express';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import ChatSerializer from '../serializers/chatSerializer';
import FindOrCreateUsecase from '../usecases/findOrCreateUsecase';

class FindOrCreateChatController implements ApplicationIController {
  // eslint-disable-next-line class-methods-use-this
  async handle(req: Request, res: Response) {
    const { chatId } = req.params;
    // eslint-disable-next-line camelcase
    const { member_ids } = req.body;

    const usecase = new FindOrCreateUsecase();
    // eslint-disable-next-line camelcase
    const newChat = await usecase.run({ chatId: Number(chatId), member_ids });

    res.status(201).json(new ChatSerializer(newChat).serialize());
  }
}

export default FindOrCreateChatController;
