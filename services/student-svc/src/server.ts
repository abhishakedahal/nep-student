// student-svc Server Entrypoint
import { app } from './app.js';
import { env } from './infrastructure/config/env.js';

const server = app.listen(env.PORT, () => {
  console.log(`🚀 [student-svc] running on port ${env.PORT} in ${env.NODE_ENV} mode`);
});

process.on('SIGTERM', () => {
  console.log('[student-svc] Gracefully shutting down...');
  server.close(() => process.exit(0));
});
