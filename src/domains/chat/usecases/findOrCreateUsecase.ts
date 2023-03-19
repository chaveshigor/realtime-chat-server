import Chat from '../../../entities/chat';
import { ApplicationIUsecase } from '../../../shared/interfaces/usecase';
import ApplicationUseCase from '../../../shared/classes/applicationUsecase';
import User from '../../../entities/user';

type ChatParams = {
  chatId: number | null;
  memberIds: Array<number> | null;
};

class CreateOrCreateUsecase
  extends ApplicationUseCase
  implements ApplicationIUsecase
{
  async run(params: ChatParams): Promise<Chat> {
    const chatRepository = this.getRepository(Chat);
    const userRepository = this.getRepository(User);

    if (params.chatId) {
      const chat = await chatRepository.findOne({
        where: { id: params.chatId },
        relations: { messages: true, lastMessage: true },
      });
      return chat as Chat;
    }
    const newChat = chatRepository.create();
    await chatRepository.save(newChat);

    (params.memberIds as Array<number>).forEach(async userId => {
      const user = (await userRepository.findOne({
        where: { id: userId },
        relations: { chats: true },
      })) as User;
      user.chats = [...user.chats, newChat];
      await userRepository.save(user);
    });

    return newChat;
  }
}

export default CreateOrCreateUsecase;
