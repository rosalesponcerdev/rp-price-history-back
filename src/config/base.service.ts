import { ConfigServer } from './config';
import { PrismaClient } from '@prisma/client';

export class BaseService<T> extends ConfigServer {
  execRepository!: T;
  connection: PrismaClient;

  constructor(repository: string) {
    super();

    this.connection = this.dbConnect();
    this.execRepository = (this.connection as any)[repository] as T;
  }
}
