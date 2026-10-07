// Application Use Case: GetMerchantUseCase
import { IMerchantRepository } from '../../domain/interfaces/business-svc.repository.js';

export class GetMerchantUseCase {
  constructor(private repo: IMerchantRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
