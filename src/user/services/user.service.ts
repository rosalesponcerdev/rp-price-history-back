import { DeleteResult, UpdateResult } from 'typeorm';

import { Service } from '../../interfaces/service.interface';
import { BaseService } from '../../config/base.service';
import { UserDTO } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';

export class UserService
  extends BaseService<UserEntity>
  implements Service<UserEntity, UserDTO>
{
  constructor() {
    super(UserEntity);
  }

  async getAll(): Promise<UserEntity[]> {
    return this.execRepository.find();
  }

  async find(id: string): Promise<UserEntity | null> {
    return this.execRepository.findOne({
      where: { id },
    });
  }

  async create(body: UserDTO): Promise<UserEntity> {
    return this.execRepository.save(body);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.execRepository.delete({ id });
  }

  async update(id: string, update: UserDTO): Promise<UpdateResult> {
    return this.execRepository.update({ id }, update);
  }
}
