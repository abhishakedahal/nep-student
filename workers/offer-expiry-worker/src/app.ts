// offer-expiry-worker Runner
console.log('👷 [offer-expiry-worker] started. Task: Scheduled Campaign Offer Expiration & Quota Audit');

// Graceful worker shutdown
process.on('SIGTERM', () => {
  console.log('[offer-expiry-worker] Shutting down worker...');
  process.exit(0);
});
