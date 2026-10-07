// Application Use Case: GetOfferUseCase
import { IOfferRepository } from '../../domain/interfaces/campaign-offer-svc.repository.js';

export class GetOfferUseCase {
  constructor(private repo: IOfferRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
