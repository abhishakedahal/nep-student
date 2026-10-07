// Application Use Case: GetStudentProfileUseCase
import { IStudentProfileRepository } from '../../domain/interfaces/student-svc.repository.js';

export class GetStudentProfileUseCase {
  constructor(private repo: IStudentProfileRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
