
import { Request, Response } from 'express';
import { ServiceClient } from '../clients/service-client.js';

const identitySvc = new ServiceClient('http://localhost:5001', 'identity-svc');
const verificationSvc = new ServiceClient('http://localhost:5003', 'verification-svc');
const campaignSvc = new ServiceClient('http://localhost:5006', 'campaign-offer-svc');
const redemptionSvc = new ServiceClient('http://localhost:5007', 'redemption-svc');

export class StudentBffController {
  static async getCatalog(req: Request, res: Response) {
    const city = req.query.city as string || 'ALL';
    const offers = await campaignSvc.request(`/api/v1/offers?city=${city}`);
    res.json({ success: true, city, offers });
  }

  static async verifyStatus(req: Request, res: Response) {
    const studentId = req.params.studentId;
    const status = await verificationSvc.request(`/api/v1/verification/${studentId}`);
    res.json({ success: true, studentId, status });
  }

  static async redeemCoupon(req: Request, res: Response) {
    const { offerId, studentId } = req.body;
    const idempotencyKey = req.headers['idempotency-key'] as string;
    const redemption = await redemptionSvc.request('/api/v1/redemption', {
      method: 'POST',
      body: JSON.stringify({ offerId, studentId }),
      headers: { 'idempotency-key': idempotencyKey || '' }
    });
    res.json({ success: true, redemption });
  }
}
