import { Request, Response } from "express";
import { ApplicationIController } from "../../../shared/interfaces/controller";
import GettAllChatsUsecase from "../usecases/getAllChatsUsecase";

class FindOrCreateChatController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { userId } = req.params

    const usecase = new GettAllChatsUsecase();
    const new_chat = await usecase.run(Number(userId));

    res.status(201).json(new_chat);
  }
}

export default FindOrCreateChatController;
