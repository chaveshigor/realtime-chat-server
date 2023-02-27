import { Chat } from "../../../entities/chat";
import { ApplicationIUsecase } from "../../../shared/interfaces/usecase";
import ApplicationUseCase from "../../../shared/classes/applicationUsecase";
import { User } from "../../../entities/user";

class GetAllChatsUsecase extends ApplicationUseCase implements ApplicationIUsecase {
  async run(userId: number): Promise<Chat[]> {
    const userRepository = this.getRepository(User);
    const user = await userRepository.findOne({
      where: {id: userId},
      relations: ['chats', 'chats.messages', 'chats.users', 'chats.messages.user'],
      order: {chats: {messages: {createdAt: "ASC"}}}}) as User;

    return user?.chats;
  };
};

export default GetAllChatsUsecase;
