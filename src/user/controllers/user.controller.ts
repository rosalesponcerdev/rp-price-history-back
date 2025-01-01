import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { BaseController } from '../../interfaces/base-controller.interface';

export class UserController implements BaseController {
  constructor(private readonly _userSrv: UserService = new UserService()) {}

  async getAll(req: Request, res: Response) {
    try {
      const data = await this._userSrv.getAll();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async find(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this._userSrv.find(id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await this._userSrv.create(req.body);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this._userSrv.update(id, req.body);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this._userSrv.delete(id);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }
}
