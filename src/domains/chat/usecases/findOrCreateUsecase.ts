import { Chat } from "../../../entities/chat";
import { ApplicationIUsecase } from "../../../shared/interfaces/usecase";
import ApplicationUseCase from "../../../shared/classes/applicationUsecase";
import { User } from "../../../entities/user";

type ChatParams = {
  chat_id: number | null,
  member_ids: Array<number> | null
}

class CreateOrCreateUsecase extends ApplicationUseCase implements ApplicationIUsecase {
  async run(params: ChatParams): Promise<Chat> {
    const chatRepository = this.getRepository(Chat);
    const userRepository = this.getRepository(User);

    if(params.chat_id) {
      const chat = await chatRepository.findOneBy({ id: params.chat_id });
      return chat as Chat;
    }else {
      const new_chat = chatRepository.create();
      await chatRepository.save(new_chat);

      (params.member_ids as Array<number>).forEach(async user_id => {
        const user = await userRepository.findOneBy({ id: user_id });
        (user as User).chats = [new_chat];
        await userRepository.save(user as User);
      });

      return new_chat;
    }
  }
}

export default CreateOrCreateUsecase;
