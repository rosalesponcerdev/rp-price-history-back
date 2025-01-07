import { Router } from 'express';

export abstract class BaseRouter<C, M> {
  router: Router;
  controller: C;
  middleware: M;

  constructor(
    Controller: { new (...args: any[]): C },
    Middleware: { new (...args: any[]): M },
  ) {
    this.router = Router();
    this.controller = new Controller();
    this.middleware = new Middleware();

    this.routes();
  }

  routes() {}
}
