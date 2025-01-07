import { BaseRouter } from '../shared/router/router';

import { ProductController } from './controllers/product.controller';
import { ProductMiddleware } from './middleware/product.middleware';

export class ProductRouter extends BaseRouter<
  ProductController,
  ProductMiddleware
> {
  constructor() {
    super(ProductController, ProductMiddleware);
  }

  routes(): void {
    this.router.get('/products', (req, res) =>
      this.controller.getAll(req, res),
    );

    this.router.get('/products/:id', (req, res) =>
      this.controller.find(req, res),
    );

    this.router.post(
      '/products',
      (req, res, next) => this.middleware.ProductValidator(req, res, next),
      (req, res) => this.controller.create(req, res),
    );

    this.router.delete('/products/:id', (req, res) =>
      this.controller.delete(req, res),
    );

    this.router.put('/products/:id', (req, res) =>
      this.controller.update(req, res),
    );
  }
}
