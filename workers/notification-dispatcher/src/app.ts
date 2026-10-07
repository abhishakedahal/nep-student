// notification-dispatcher Runner
console.log('👷 [notification-dispatcher] started. Task: Transactional Email & SMS Kafka Consumer');

// Graceful worker shutdown
process.on('SIGTERM', () => {
  console.log('[notification-dispatcher] Shutting down worker...');
  process.exit(0);
});
