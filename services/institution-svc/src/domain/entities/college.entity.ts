// Domain Entity: College
export class CollegeEntity {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
