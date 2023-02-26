import { User } from "../../../entities/user";
import { ApplicationIUsecase } from "../../../shared/interfaces/usecase";

class FindUsecase implements ApplicationIUsecase {
  run(params: String): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export default FindUsecase;
