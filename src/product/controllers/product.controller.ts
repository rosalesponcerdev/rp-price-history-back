import { Request, Response } from 'express';
import { BaseController } from '../../interfaces/base-controller.interface';
import { ProductService } from '../service/product.service';

export class ProductController implements BaseController {
  constructor(
    private readonly _productSrv: ProductService = new ProductService(),
  ) {}

  async getAll(_req: Request, res: Response) {
    try {
      const data = await this._productSrv.getAll();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async find(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this._productSrv.find(id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await this._productSrv.create(req.body);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this._productSrv.update(id, req.body);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this._productSrv.delete(id);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }
}
