import { Request, Response } from "express";
import { ApplicationIController } from "../../../shared/interfaces/controller";
import GetAllMessagesUsecase from "../usecases/getAllMessagesUsecase";

class GetAllMessagesController implements ApplicationIController {
  async handle(req: Request, res: Response) {
    const { chatId } = req.params;

    const usecase = new GetAllMessagesUsecase();
    const messages = await usecase.run(Number(chatId));

    res.status(200).json(messages);
  }
}

export default GetAllMessagesController;
