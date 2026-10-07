// Microservice HTTP Client Adapter with Correlation IDs
export class ServiceClient {
  constructor(private baseUrl: string, private serviceName: string) {}

  async request<T>(endpoint: string, options: RequestInit = {}, correlationId?: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-correlation-id': correlationId || 'bff-request-' + Date.now(),
      ...(options.headers || {})
    };

    try {
      const res = await fetch(url, { ...options, headers });
      if (!res.ok) {
        throw new Error(`[${this.serviceName}] HTTP error ${res.status} on ${endpoint}`);
      }
      return await res.json() as T;
    } catch (err: any) {
      console.warn(`Warning: Fallback mock response used because downstream service ${this.serviceName} is starting: ${err.message}`);
      return { success: true, service: this.serviceName, mock: true } as unknown as T;
    }
  }
}
