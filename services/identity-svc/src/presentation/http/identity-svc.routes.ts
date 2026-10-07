// Presentation: Express Router
import { Router, Request, Response } from 'express';

export const identity_svc_routes = Router();

identity_svc_routes.get('/health', (req: Request, res: Response) => {
  res.json({ service: 'identity-svc', status: 'UP', timestamp: new Date().toISOString() });
});

identity_svc_routes.get('/:id', async (req: Request, res: Response) => {
  res.json({ success: true, service: 'identity-svc', id: req.params.id });
});
