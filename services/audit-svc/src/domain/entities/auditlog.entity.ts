// Domain Entity: AuditLog
export class AuditLogEntity {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
