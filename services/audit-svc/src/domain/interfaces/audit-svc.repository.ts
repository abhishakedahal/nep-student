// Domain Repository Interface: audit-svc
export interface IAuditLogRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
