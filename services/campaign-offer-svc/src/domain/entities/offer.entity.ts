
export interface OfferProps {
  id: string;
  merchantId: string;
  title: string;
  discountType: 'PERCENTAGE' | 'FIXED_AMOUNT';
  discountValue: number;
  remainingQuota: number;
  validUntil: Date;
  status: 'ACTIVE' | 'PAUSED' | 'EXPIRED';
}

export class OfferEntity {
  constructor(public readonly props: OfferProps) {}

  public isRedeemable(): boolean {
    return this.props.status === 'ACTIVE' && 
           this.props.remainingQuota > 0 && 
           new Date() < this.props.validUntil;
  }
}
