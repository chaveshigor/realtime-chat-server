import User from '../../../entities/user';
import { ApplicationIUsecase } from '../../../shared/interfaces/usecase';
import ApplicationUseCase from '../../../shared/classes/applicationUsecase';

type UserParams = {
  name: string;
  username: string;
};

class CreateUserUsecase
  extends ApplicationUseCase
  implements ApplicationIUsecase
{
  async run(params: UserParams): Promise<User> {
    const repository = this.getRepository(User);

    const user = await repository.findOneBy({ username: params.username });
    if (user) {
      return user;
    }

    const newUser = repository.create(params);
    await repository.save(newUser);

    return newUser;
  }
}

export default CreateUserUsecase;
