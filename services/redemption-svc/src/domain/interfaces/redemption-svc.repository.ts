// Domain Repository Interface: redemption-svc
export interface IRedemptionRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
