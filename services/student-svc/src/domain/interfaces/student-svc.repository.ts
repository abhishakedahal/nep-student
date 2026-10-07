// Domain Repository Interface: student-svc
export interface IStudentProfileRepository {
  findById(id: string): Promise<any | null>;
  create(data: any): Promise<any>;
}
