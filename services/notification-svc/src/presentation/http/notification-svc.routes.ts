// Presentation: Express Router
import { Router, Request, Response } from 'express';

export const notification_svc_routes = Router();

notification_svc_routes.get('/health', (req: Request, res: Response) => {
  res.json({ service: 'notification-svc', status: 'UP', timestamp: new Date().toISOString() });
});

notification_svc_routes.get('/:id', async (req: Request, res: Response) => {
  res.json({ success: true, service: 'notification-svc', id: req.params.id });
});
