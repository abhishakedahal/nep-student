// Application Use Case: GetMerchantDailyMetricUseCase
import { IMerchantDailyMetricRepository } from '../../domain/interfaces/analytics-svc.repository.js';

export class GetMerchantDailyMetricUseCase {
  constructor(private repo: IMerchantDailyMetricRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
