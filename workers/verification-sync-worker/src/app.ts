// verification-sync-worker Runner
console.log('👷 [verification-sync-worker] started. Task: Nightly College Roster CSV & SFTP Sync');

// Graceful worker shutdown
process.on('SIGTERM', () => {
  console.log('[verification-sync-worker] Shutting down worker...');
  process.exit(0);
});
