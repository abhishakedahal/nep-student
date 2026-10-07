# NepStudent Asynchronous Event Matrix

| Event Name | Source Service | Schema | Consumers | Retention / SLA |
|---|---|---|---|---|
| `identity.auth.user.registered` | `identity-svc` | `identity.auth.user.registered.avsc` | `student-svc`, `notification-svc`, `audit-svc` | 7 Days / At-least-once |
| `verification.engine.verified` | `verification-svc` | `verification.engine.verified.avsc` | `student-svc`, `notification-svc`, `analytics-svc` | 30 Days / Exactly-once semantics |
| `transaction.redemption.allocated` | `redemption-svc` | `transaction.redemption.allocated.avsc` | `campaign-offer-svc`, `analytics-svc`, `notification-svc` | 90 Days / High throughput |
