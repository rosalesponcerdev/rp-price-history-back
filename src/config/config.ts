import { DataSource } from 'typeorm';
import { DbConnection } from './db';
import { EnvironmentUtil } from './env.util';

export abstract class ConfigServer {
  constructor() {}

  getEnvironment(key: string) {
    return EnvironmentUtil.getEnvironment(key);
  }

  getNumberEnv(key: string): number {
    return EnvironmentUtil.getNumberEnv(key);
  }

  dbConnect(): DataSource {
    return DbConnection.instance;
  }
}
