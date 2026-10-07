// Domain Entity: MerchantDailyMetric
export class MerchantDailyMetricEntity {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
