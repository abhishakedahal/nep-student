// Domain Repository Interface: business-svc
export interface IMerchantRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
