// Presentation: Express Router
import { Router, Request, Response } from 'express';

export const redemption_svc_routes = Router();

redemption_svc_routes.get('/health', (req: Request, res: Response) => {
  res.json({ service: 'redemption-svc', status: 'UP', timestamp: new Date().toISOString() });
});

redemption_svc_routes.get('/:id', async (req: Request, res: Response) => {
  res.json({ success: true, service: 'redemption-svc', id: req.params.id });
});
