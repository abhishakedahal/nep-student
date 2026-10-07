
import { Router, Request, Response } from 'express';

export const campaign_offer_svc_routes = Router();

campaign_offer_svc_routes.get('/health', (req: Request, res: Response) => {
  res.json({ service: 'campaign-offer-svc', status: 'UP', timestamp: new Date().toISOString() });
});

campaign_offer_svc_routes.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: [
      { id: 'OFF-1', merchant: 'Himalayan Java', title: '25% Off Coffee', quota: 500, remainingQuota: 88, status: 'ACTIVE' },
      { id: 'OFF-2', merchant: 'Heritage Books', title: '15% Off Books', quota: 250, remainingQuota: 52, status: 'ACTIVE' }
    ]
  });
});
