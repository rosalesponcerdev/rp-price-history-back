import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { ProductDTO } from '../dto/product.dto';

import { ProductEntity } from '../entities/product.entity';

export class ProductService extends BaseService<ProductEntity> {
  constructor() {
    super(ProductEntity);
  }

  async getAll(): Promise<ProductEntity[]> {
    return this.execRepository.find();
  }

  async find(id: string): Promise<ProductEntity | null> {
    return this.execRepository.findOne({
      where: { id },
    });
  }

  async create(body: ProductDTO): Promise<ProductEntity> {
    return this.execRepository.save(body);
  }

  async delete(id: string): Promise<DeleteResult> {
    return this.execRepository.delete({ id });
  }

  async update(id: string, update: ProductDTO): Promise<UpdateResult> {
    return this.execRepository.update({ id }, update);
  }
}
