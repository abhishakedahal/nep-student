// Domain Entity: VerificationRequest
export class VerificationRequestEntity {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
