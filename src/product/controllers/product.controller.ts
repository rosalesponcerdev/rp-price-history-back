import { Request, Response } from 'express';
import { BaseController } from '../../interfaces/base-controller.interface';
import { ProductService } from '../service/product.service';
import { HttpResponse } from '../../shared/response/http.response';
import { Prisma } from '@prisma/client';

export class ProductController implements BaseController {
  constructor(
    private readonly _productSrv: ProductService = new ProductService(),
    private _httpResponse: HttpResponse = new HttpResponse(),
  ) {}

  async getAll(_req: Request, res: Response) {
    try {
      const data = await this._productSrv.getAll();

      if (data.length === 0) {
        this._httpResponse.NotFound(res, 'Not Exist');

        return;
      }

      this._httpResponse.OK(res, data);
    } catch (error) {
      console.error(error);
      this._httpResponse.Error(res, error);
    }
  }

  async find(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this._productSrv.find(id);
      this._httpResponse.OK(res, data);
    } catch (error) {
      console.error(error);
      this._httpResponse.Error(res, error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await this._productSrv.create(req.body);

      this._httpResponse.OK(res, data);
    } catch (error) {
      console.error(error);
      this._httpResponse.Error(res, error);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this._productSrv.update(id, req.body);

      this._httpResponse.OK(res, data);
    } catch (error) {
      console.error(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          this._httpResponse.NotFound(res, 'Product Not Found');

          return;
        }
      }

      this._httpResponse.Error(res, error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this._productSrv.delete(id);

      this._httpResponse.OK(res, data);
    } catch (error) {
      console.error(error);
      this._httpResponse.Error(res, error);
    }
  }
}
