import { Request, Response } from 'express';
import { ApplicationIController } from '../../../shared/interfaces/controller';
import CreateMessageUsecase from '../usecases/createMessageUsecase';

class FindOrCreateChatController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { chatId } = req.params;
    const { userId, content } = req.body;

    const usecase = new CreateMessageUsecase();
    const newMessage = await usecase.run({
      chatId: Number(chatId),
      userId,
      content,
    });

    res.status(201).json(newMessage);
  }
}

export default FindOrCreateChatController;
