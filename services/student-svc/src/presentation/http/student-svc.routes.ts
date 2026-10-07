// Presentation: Express Router
import { Router, Request, Response } from 'express';

export const student_svc_routes = Router();

student_svc_routes.get('/health', (req: Request, res: Response) => {
  res.json({ service: 'student-svc', status: 'UP', timestamp: new Date().toISOString() });
});

student_svc_routes.get('/:id', async (req: Request, res: Response) => {
  res.json({ success: true, service: 'student-svc', id: req.params.id });
});
