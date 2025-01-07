import { EnvironmentUtil } from './env.util';
import { createClient } from '@libsql/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { PrismaClient } from '@prisma/client';

export abstract class DbConnection {
  private static _connection: PrismaClient | undefined;

  static get instance(): PrismaClient {
    if (DbConnection._connection) return DbConnection._connection;

    DbConnection._connection = this.dbConnect();

    return DbConnection._connection;
  }

  private static dbConnect(): PrismaClient {
    const libsql = createClient({
      url: EnvironmentUtil.getEnvironment('TURSO_DATABASE_URL') as string,
      authToken: EnvironmentUtil.getEnvironment('TURSO_AUTH_TOKEN') as string,
      // url: `file:${__dirname}/../../prisma/dev.db`,
    });

    const adapter = new PrismaLibSQL(libsql);

    return new PrismaClient({ adapter });
  }
}
