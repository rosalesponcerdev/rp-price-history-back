import { Router } from 'express';

export abstract class BaseRouter<C> {
  router: Router;
  controller: C;

  constructor(Controller: { new (...args: any[]): C }) {
    this.router = Router();
    this.controller = new Controller();

    this.routes();
  }

  routes() {}
}
