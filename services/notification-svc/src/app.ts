// Presentation: notification-svc Express Application Setup
import express from 'express';
import { notification_svc_routes } from './presentation/http/notification-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', notification_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'notification-svc' }));
