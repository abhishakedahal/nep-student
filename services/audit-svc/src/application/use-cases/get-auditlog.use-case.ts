// Application Use Case: GetAuditLogUseCase
import { IAuditLogRepository } from '../../domain/interfaces/audit-svc.repository.js';

export class GetAuditLogUseCase {
  constructor(private repo: IAuditLogRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
