import { Request, Response } from 'express';

export interface BaseController {
  //CREATE
  create(req: Request, res: Response): void;

  //READ
  find(req: Request, res: Response): void;
  getAll(req: Request, res: Response): void;

  //DELETE
  delete(req: Request, res: Response): void;

  //UPDATE
  update(req: Request, res: Response): void;
}
