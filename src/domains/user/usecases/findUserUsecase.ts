import User from '../../../entities/user';
import { ApplicationIUsecase } from '../../../shared/interfaces/usecase';
import ApplicationUseCase from '../../../shared/classes/applicationUsecase';

type UserParams = {
  username: string;
};

class FindUserUsecase
  extends ApplicationUseCase
  implements ApplicationIUsecase
{
  async run(params: UserParams): Promise<User | null> {
    const repository = this.getRepository(User);

    const user = await repository.findOneBy({ username: params.username });
    if (user) {
      return user;
    }

    return null;
  }
}

export default FindUserUsecase;
