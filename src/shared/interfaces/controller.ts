import { Request, Response } from "express";

export interface ApplicationIController {
  handle(req: Request, res: Response): Promise<Response | void>;
}
