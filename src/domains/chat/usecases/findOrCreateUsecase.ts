import { Chat } from "../../../entities/chat";
import { ApplicationIUsecase } from "../../../shared/interfaces/usecase";
import ApplicationUseCase from "../../../shared/classes/applicationUsecase";
import { User } from "../../../entities/user";

type ChatParams = {
  chatId: number | null,
  member_ids: Array<number> | null
}

class CreateOrCreateUsecase extends ApplicationUseCase implements ApplicationIUsecase {
  async run(params: ChatParams): Promise<Chat> {
    const chatRepository = this.getRepository(Chat);
    const userRepository = this.getRepository(User);

    if(params.chatId) {
      const chat = await chatRepository.findOne(
        {
          where:{ id: params.chatId },
          relations: { messages: true, lastMessage: true }
        }
      );
      return chat as Chat;
    }else {
      const newChat = chatRepository.create();
      await chatRepository.save(newChat);

      (params.member_ids as Array<number>).forEach(async userId => {
        const user = await userRepository.findOne({where: {id: userId}, relations: {chats: true} }) as User;
        user.chats = [...user.chats, newChat];
        await userRepository.save(user);
      });

      return newChat;
    }
  }
}

export default CreateOrCreateUsecase;
