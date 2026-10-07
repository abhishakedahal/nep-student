// Domain Entity: Redemption
export class RedemptionEntity {
  constructor(
    public readonly id: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
