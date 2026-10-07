
import express from 'express';
import cors from 'cors';
import { studentRoutes } from './routes/student.routes.js';

export const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ bff: 'student-bff', status: 'UP' }));
app.use('/api/v1', studentRoutes);
