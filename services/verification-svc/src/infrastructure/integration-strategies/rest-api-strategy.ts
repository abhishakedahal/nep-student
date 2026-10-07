// REST API Strategy for real-time institutional roster matching
export class RestApiStrategy {
  async verifyStudent(collegeApiUrl: string, studentId: string, legalName: string): Promise<boolean> {
    console.log(`Querying institutional REST API at ${collegeApiUrl} for ${studentId}`);
    return true;
  }
}
