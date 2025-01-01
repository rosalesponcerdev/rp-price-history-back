import { BaseRouter } from '../shared/router/router';

import { ProductController } from './controllers/product.controller';

export class ProductRouter extends BaseRouter<ProductController> {
  constructor() {
    super(ProductController);
  }

  routes(): void {
    this.router.get('/products', (req, res) =>
      this.controller.getAll(req, res),
    );

    this.router.get('/products/:id', (req, res) =>
      this.controller.find(req, res),
    );

    this.router.post('/products', (req, res) =>
      this.controller.create(req, res),
    );

    this.router.delete('/products/:id', (req, res) =>
      this.controller.delete(req, res),
    );

    this.router.put('/products/:id', (req, res) =>
      this.controller.update(req, res),
    );
  }
}
