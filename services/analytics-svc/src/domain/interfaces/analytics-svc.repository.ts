// Domain Repository Interface: analytics-svc
export interface IMerchantDailyMetricRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
