import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  quantity!: number;

  @Column()
  unit!: string;
}
