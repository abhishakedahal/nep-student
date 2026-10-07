// business-bff Express Aggregator Application
import express from 'express';

export const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ bff: 'business-bff', target: 'Merchant Business Portal', status: 'UP' });
});

// Example BFF aggregated route
app.get('/api/aggregate', (req, res) => {
  res.json({
    bff: 'business-bff',
    message: 'Aggregated microservices payload for Merchant Business Portal',
    timestamp: new Date().toISOString()
  });
});
