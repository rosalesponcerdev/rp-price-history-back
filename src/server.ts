import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { ConfigServer } from './config/config';

import { ProductRouter } from './product/product.router';

class ServerBootstrap extends ConfigServer {
  app: express.Application = express();

  private _port: number = this.getNumberEnv('PORT') || 8000;

  constructor() {
    super();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.initializeConnection();

    this.app.use('/api', this.routers());

    this.listen();
  }

  routers(): Array<express.Router> {
    return [new ProductRouter().router];
  }

  private initializeConnection() {
    try {
      this.dbConnect();
    } catch (error) {
      console.error(error);
    }
  }

  listen() {
    this.app.listen(this._port, () => {
      console.log(`Server listen on port http://localhost:${this._port}/`);
    });
  }
}

new ServerBootstrap();
