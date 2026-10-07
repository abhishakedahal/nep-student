// Presentation: student-svc Express Application Setup
import express from 'express';
import { student_svc_routes } from './presentation/http/student-svc.routes.js';

export const app = express();
app.use(express.json());
app.use('/api/v1', student_svc_routes);
app.get('/health', (req, res) => res.json({ status: 'UP', service: 'student-svc' }));
