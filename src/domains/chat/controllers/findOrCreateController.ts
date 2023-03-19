import { Request, Response } from 'express';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import ChatSerializer from '../serializers/chatSerializer';
import FindOrCreateUsecase from '../usecases/findOrCreateUsecase';

class FindOrCreateChatController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { chatId } = req.params;
    const { memberIds } = req.body;

    const usecase = new FindOrCreateUsecase();
    const newChat = await usecase.run({ chatId: Number(chatId), memberIds });

    res.status(201).json(new ChatSerializer(newChat).serialize());
  }
}

export default FindOrCreateChatController;
