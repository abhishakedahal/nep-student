// Domain Repository Interface: notification-svc
export interface INotificationLogRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
