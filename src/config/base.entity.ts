import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt!: Date;

  @UpdateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt!: Date;
}
