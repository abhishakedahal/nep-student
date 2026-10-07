// Domain Repository Interface: campaign-offer-svc
export interface IOfferRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
