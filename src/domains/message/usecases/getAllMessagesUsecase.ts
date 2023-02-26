import { ApplicationIUsecase } from "../../../shared/interfaces/usecase";
import ApplicationUseCase from "../../../shared/classes/applicationUsecase";
import { Message } from "../../../entities/message";
import { Chat } from "../../../entities/chat";

type MessageParams = {
  chatId: number
}

class GetAllMessagesUsecase extends ApplicationUseCase implements ApplicationIUsecase {
  async run(params: MessageParams): Promise<Message[]> {
    const chatRepository = this.getRepository(Chat);
    const messageRepository = this.getRepository(Message);

    const chat = await chatRepository.findOneBy({id: params.chatId}) as Chat;
    const messages = messageRepository.find({relations: {user: true}, where: {chat: chat}});

    return messages;
  };
};

export default GetAllMessagesUsecase;
