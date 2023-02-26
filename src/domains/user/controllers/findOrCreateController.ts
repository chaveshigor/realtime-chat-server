import { Request, Response } from "express";
import { ApplicationIController } from "../../../shared/interfaces/controller";
import FindOrCreateUsecase from "../usecases/findOrCreateUsecase";

class CreateUserController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { name, username } = req.body;

    const usecase = new FindOrCreateUsecase();
    const new_user = await usecase.run({ name, username });

    res.status(201).json(new_user);
  }
}

export default CreateUserController;
