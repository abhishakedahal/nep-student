// Application Use Case: GetCollegeUseCase
import { ICollegeRepository } from '../../domain/interfaces/institution-svc.repository.js';

export class GetCollegeUseCase {
  constructor(private repo: ICollegeRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
