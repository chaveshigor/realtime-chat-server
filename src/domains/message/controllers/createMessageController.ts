import { Request, Response } from 'express';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import CreateMessageUsecase from '../usecases/createMessageUsecase';

class FindOrCreateChatController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { userId, chatId } = req.params;
    const { content } = req.body;

    const usecase = new CreateMessageUsecase();
    const newMessage = await usecase.run({
      chatId: Number(chatId),
      userId: Number(userId),
      content,
    });

    res.status(201).json(newMessage);
  }
}

export default FindOrCreateChatController;
