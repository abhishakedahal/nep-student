// Presentation: Express Router
import { Router, Request, Response } from 'express';

export const verification_svc_routes = Router();

verification_svc_routes.get('/health', (req: Request, res: Response) => {
  res.json({ service: 'verification-svc', status: 'UP', timestamp: new Date().toISOString() });
});

verification_svc_routes.get('/:id', async (req: Request, res: Response) => {
  res.json({ success: true, service: 'verification-svc', id: req.params.id });
});
