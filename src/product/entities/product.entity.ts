import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column({
    type: 'numeric',
  })
  price!: number;

  @Column({
    type: 'numeric',
  })
  quantity!: number;

  @Column()
  unit!: string;
}
