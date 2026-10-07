// Presentation: campaign-offer-svc Express Application Setup
import express from 'express';
import { campaign_offer_svc_routes } from './presentation/http/campaign-offer-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', campaign_offer_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'campaign-offer-svc' }));
