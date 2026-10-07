// Application Use Case: GetVerificationRequestUseCase
import { IVerificationRequestRepository } from '../../domain/interfaces/verification-svc.repository.js';

export class GetVerificationRequestUseCase {
  constructor(private repo: IVerificationRequestRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
