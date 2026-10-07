// Application Use Case: GetNotificationLogUseCase
import { INotificationLogRepository } from '../../domain/interfaces/notification-svc.repository.js';

export class GetNotificationLogUseCase {
  constructor(private repo: INotificationLogRepository) {}

  public async execute(id: string) {
    return this.repo.findById(id);
  }
}
