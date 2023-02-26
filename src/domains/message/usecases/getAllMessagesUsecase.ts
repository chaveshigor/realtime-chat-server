import { ApplicationIUsecase } from "../../../shared/interfaces/usecase";
import ApplicationUseCase from "../../../shared/classes/applicationUsecase";
import { Message } from "../../../entities/message";

class GetAllMessagesUsecase extends ApplicationUseCase implements ApplicationIUsecase {
  async run(chatId: number): Promise<Message[]> {
    const messageRepository = this.getRepository(Message);
    const messages = await messageRepository.find({where: { chat: {id: chatId} }, relations: {user: true}});

    return messages;
  };
};

export default GetAllMessagesUsecase;
