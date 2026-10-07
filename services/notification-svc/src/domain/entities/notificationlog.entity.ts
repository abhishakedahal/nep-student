// Domain Entity: NotificationLog
export class NotificationLogEntity {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
