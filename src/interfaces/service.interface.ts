export interface Service<T, K = T> {
  //CREATE
  create(body: K): Promise<T>;

  //READ
  find(id: string): Promise<T | null>;
  getAll(): Promise<T[]>;

  //DELETE
  delete(id: string): Promise<T>;

  //UPDATE
  update(id: string, update: K): Promise<T>;
}
