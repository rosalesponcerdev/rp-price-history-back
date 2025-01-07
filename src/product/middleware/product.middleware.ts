import { NextFunction, Request, Response } from 'express';
import { ProductDto } from '../dto/product.dto';
import { HttpResponse } from '../../shared/response/http.response';

export class ProductMiddleware {
  constructor(private _httpResponse: HttpResponse = new HttpResponse()) {}

  ProductValidator(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, quantity, unit } = req.body;

      ProductDto.parse({
        name,
        price,
        quantity,
        unit,
      });

      next();
    } catch (error: any) {
      this._httpResponse.BadRequest(res, error?.issues);
    }
  }
}
