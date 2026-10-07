// SFTP CSV Strategy for batch college enrollment reconciliation
export class SftpCsvStrategy {
  async fetchBatchRoster(sftpHost: string, remotePath: string): Promise<string[]> {
    console.log(`Fetching nightly roster via SFTP from ${sftpHost}:${remotePath}`);
    return [];
  }
}
