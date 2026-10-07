// Domain Repository Interface: institution-svc
export interface ICollegeRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
