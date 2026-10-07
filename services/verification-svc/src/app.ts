// Presentation: verification-svc Express Application Setup
import express from 'express';
import { verification_svc_routes } from './presentation/http/verification-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', verification_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'verification-svc' }));
