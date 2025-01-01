import { EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ConfigServer } from './config';

export class BaseService<T extends BaseEntity> extends ConfigServer {
  execRepository: Repository<T>;

  constructor(private getEntity: EntityTarget<T>) {
    super();

    this.execRepository = this.initRepository(getEntity);
  }

  initRepository<T extends ObjectLiteral>(e: EntityTarget<T>): Repository<T> {
    const getCon = this.dbConnect();

    return getCon.getRepository(e);
  }
}
