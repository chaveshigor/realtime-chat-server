import { Request, Response } from "express";
import { ApplicationIController } from "../../../shared/interfaces/controller";
import FindOrCreateUsecase from "../usecases/findOrCreateUsecase";

class FindOrCreateChatController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { chat_id, member_ids } = req.body;

    const usecase = new FindOrCreateUsecase();
    const new_chat = await usecase.run({ chat_id, member_ids });

    res.status(201).json(new_chat);
  }
}

export default FindOrCreateChatController;
