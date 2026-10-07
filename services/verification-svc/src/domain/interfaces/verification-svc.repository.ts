// Domain Repository Interface: verification-svc
export interface IVerificationRequestRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
