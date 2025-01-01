import { DeleteResult, UpdateResult } from 'typeorm';

export interface Service<T, K> {
  //CREATE
  create(body: K): Promise<T>;

  //READ
  find(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;

  //DELETE
  delete(id: string): Promise<DeleteResult>;

  //UPDATE
  update(id: string, update: K): Promise<UpdateResult>;
}
