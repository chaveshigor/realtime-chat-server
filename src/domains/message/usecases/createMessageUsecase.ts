import { ApplicationIUsecase } from '../../../shared/interfaces/usecase';
import ApplicationUseCase from '../../../shared/classes/applicationUsecase';
import { Message } from '../../../entities/message';
import { User } from '../../../entities/user';
import { Chat } from '../../../entities/chat';

type MessageParams = {
  content: string;
  userId: number;
  chatId: number;
};

class CreateOrCreateUsecase
  extends ApplicationUseCase
  implements ApplicationIUsecase
{
  async run(params: MessageParams): Promise<Message> {
    const messageRepository = this.getRepository(Message);
    const userRepository = this.getRepository(User);
    const chatRepository = this.getRepository(Chat);

    const newMessage = messageRepository.create({ content: params.content });
    newMessage.user = (await userRepository.findOneBy({
      id: params.userId,
    })) as User;
    newMessage.chat = (await chatRepository.findOneBy({
      id: params.chatId,
    })) as Chat;

    const chat = (await chatRepository.findOneBy({
      id: params.chatId,
    })) as Chat;
    chat.lastMessage = newMessage;

    await messageRepository.save(newMessage);
    await chatRepository.save(chat);

    return newMessage;
  }
}

export default CreateOrCreateUsecase;
