// Domain Repository Interface: identity-svc
export interface IUserRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
