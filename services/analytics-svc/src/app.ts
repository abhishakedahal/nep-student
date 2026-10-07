// Presentation: analytics-svc Express Application Setup
import express from 'express';
import { analytics_svc_routes } from './presentation/http/analytics-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', analytics_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'analytics-svc' }));
