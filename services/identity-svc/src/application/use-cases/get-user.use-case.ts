// Application Use Case: GetUserUseCase
import { IUserRepository } from '../../domain/interfaces/identity-svc.repository.js';

export class GetUserUseCase {
  constructor(private repo: IUserRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
