import { DataSource, DataSourceOptions } from 'typeorm';

import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { EnvironmentUtil } from './env.util';

export abstract class DbConnection {
  private static _connection: DataSource | undefined;

  static get instance(): DataSource {
    if (DbConnection._connection) return DbConnection._connection;

    DbConnection._connection = this.dbConnect();

    return DbConnection._connection;
  }

  private static dbConnect(): DataSource {
    return new DataSource(this.TypeORMConfig);
  }

  static get TypeORMConfig(): DataSourceOptions {
    return {
      type: 'postgres',
      host: EnvironmentUtil.getEnvironment('DATABASE_HOST'),
      port: EnvironmentUtil.getNumberEnv('DB_PORT'),
      username: EnvironmentUtil.getEnvironment('POSTGRES_USER'),
      password: EnvironmentUtil.getEnvironment('POSTGRES_PASSWORD'),
      database: EnvironmentUtil.getEnvironment('POSTGRES_DB'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
      logging: false,
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: true,
    };
  }
}
