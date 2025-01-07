import { Prisma, Product } from '@prisma/client';
import { BaseService } from '../../config/base.service';
import { Service } from '../../interfaces/service.interface';

export class ProductService
  extends BaseService<Prisma.ProductDelegate>
  implements Service<Product>
{
  constructor() {
    super('product');
  }

  async getAll(): Promise<Product[]> {
    return this.execRepository.findMany();
  }

  async find(id: string): Promise<Product | null> {
    return this.execRepository.findUnique({
      where: { id },
    });
  }

  async create(product: Product): Promise<Product> {
    const { name, price, quantity, unit } = product;

    const data = Prisma.validator<Prisma.ProductCreateInput>()({
      name,
      price,
      quantity,
      unit,
    });

    console.log(data);

    return this.execRepository.create({
      data,
    });
  }

  async delete(id: string): Promise<Product> {
    return this.execRepository.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: Product): Promise<Product> {
    return this.execRepository.update({
      data,
      where: {
        id,
      },
    });
  }
}
