// admin-bff Express Aggregator Application
import express from 'express';

export const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ bff: 'admin-bff', target: 'Institution & Super Admin Console', status: 'UP' });
});

// Example BFF aggregated route
app.get('/api/aggregate', (req, res) => {
  res.json({
    bff: 'admin-bff',
    message: 'Aggregated microservices payload for Institution & Super Admin Console',
    timestamp: new Date().toISOString()
  });
});
