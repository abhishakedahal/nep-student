// Domain Entity: StudentProfile
export class StudentProfileEntity {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
