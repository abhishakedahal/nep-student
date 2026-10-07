# NepStudent Internal Service-to-Service API Spec

## Inter-Service Communication
- **Synchronous:** gRPC over HTTP/2 for latency-critical query and command RPCs.
- **Asynchronous:** Apache Kafka for domain event broadcasting and eventual consistency.
- **BFF-to-Client:** REST / JSON (OpenAPI 3.1) and WebSockets for real-time frontend notifications.
