import { ApplicationIUsecase } from "../../../shared/interfaces/usecase";
import ApplicationUseCase from "../../../shared/classes/applicationUsecase";
import { Message } from "../../../entities/message";
import { Chat } from "../../../entities/chat";

class GetAllMessagesUsecase extends ApplicationUseCase implements ApplicationIUsecase {
  async run(chatId: number): Promise<Message[]> {
    const chatRepository = this.getRepository(Chat);

    const chat = await chatRepository.findOne({ relations: { messages: true }, where: { id: chatId } }) as Chat;
    const messages = chat.messages

    return messages;
  };
};

export default GetAllMessagesUsecase;
