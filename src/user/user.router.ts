import { UserController } from './controllers/user.controller';
import { BaseRouter } from '../shared/router/router';

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get('/users', (req, res) => this.controller.getAll(req, res));
    this.router.get('/users/:id', (req, res) => this.controller.find(req, res));
    this.router.post('/users', (req, res) => this.controller.create(req, res));
    this.router.delete('/users/:id', (req, res) =>
      this.controller.delete(req, res),
    );
    this.router.put('/users/:id', (req, res) =>
      this.controller.update(req, res),
    );
  }
}
