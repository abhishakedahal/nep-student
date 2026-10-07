// Presentation: identity-svc Express Application Setup
import express from 'express';
import { identity_svc_routes } from './presentation/http/identity-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', identity_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'identity-svc' }));
