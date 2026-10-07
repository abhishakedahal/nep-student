// Presentation: institution-svc Express Application Setup
import express from 'express';
import { institution_svc_routes } from './presentation/http/institution-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', institution_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'institution-svc' }));
