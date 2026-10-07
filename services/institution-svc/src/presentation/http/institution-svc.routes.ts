// Presentation: Express Router
import { Router, Request, Response } from 'express';

export const institution_svc_routes = Router();

institution_svc_routes.get('/health', (req: Request, res: Response) => {
  res.json({ service: 'institution-svc', status: 'UP', timestamp: new Date().toISOString() });
});

institution_svc_routes.get('/:id', async (req: Request, res: Response) => {
  res.json({ success: true, service: 'institution-svc', id: req.params.id });
});
