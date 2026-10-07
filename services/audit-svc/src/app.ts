// Presentation: audit-svc Express Application Setup
import express from 'express';
import { audit_svc_routes } from './presentation/http/audit-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', audit_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'audit-svc' }));
