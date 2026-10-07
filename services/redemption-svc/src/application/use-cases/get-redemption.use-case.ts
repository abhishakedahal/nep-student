// Application Use Case: GetRedemptionUseCase
import { IRedemptionRepository } from '../../domain/interfaces/redemption-svc.repository.js';

export class GetRedemptionUseCase {
  constructor(private repo: IRedemptionRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
