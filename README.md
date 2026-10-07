# 🇳🇵 NepStudent — Digital Student Benefits & Verification Platform

A production-grade student verification subsystem and marketplace platform focused on Nepal, starting in the **Kathmandu Valley** (Kathmandu, Lalitpur, and Bhaktapur).

Built as an enterprise-grade **TypeScript/Node.js Microservices Architecture** utilizing Clean Architecture (Hexagonal Ports-and-Adapters), Backend-for-Frontend (BFF) aggregation, Apache Kafka event streaming, and a strict Database-per-Service model.

---

## 🏛️ Core Architectural Principle

> *"Is this person currently an eligible student?"*
> 
> Microservices interact across strict domain boundaries:
> - **Browsing is unrestricted:** Frontends query `student-bff` and `campaign-offer-svc` freely.
> - **Redemption is gated:** The `redemption-svc` validates eligibility against `student-svc` and `verification-svc` prior to atomic voucher allocation.
> - **Event-driven synchronization:** Domain events stream via Apache Kafka across independent services.

---

## ⚡ Two-Track Verification Engine

| Feature | Track 1: Partner College (Instant) | Track 2: Unlisted College (Manual Review) |
|---|---|---|
| **Trigger** | Student selects listed partner institution | Student selects *"My college is not listed"* |
| **Input** | Legal name, student ID / roll, DOB | College name, student ID front photo, live selfie |
| **Method** | Automated institutional roster match | Cryptographic document upload & admin review |
| **Turnaround** | **Instant (10 seconds)** | **Within 1–24 hours** |
| **Reviewer** | System (`SYSTEM` decider) | Master Admin / College Admin |
| **Rejection Handling** | Descriptive hints, rate limited attempts | Reason code, feedback notes, **24-hour cooldown** |
| **Locking** | Atomic database transaction | **30-minute concurrent claim lock** |

---

## 📂 Monorepo Structure

```
NepStudent/
├── .github/workflows/          # Independent CI/CD per microservice & BFF
├── apps/                        # Frontend applications
│   ├── student-web/            # Student discount & verification portal
│   ├── business-portal/        # Merchant campaign & analytics console
│   ├── college-portal/         # Institutional student management portal
│   └── super-admin-portal/     # Master verification review & system administration
├── bff/                         # Backend-for-Frontend API gateways
│   ├── student-bff/            # Student client aggregation & auth proxy
│   ├── business-bff/           # Business portal aggregation
│   └── admin-bff/              # Admin dashboard aggregation
├── services/                    # Autonomous Clean Architecture Microservices (Database-per-Service)
│   ├── identity-svc/           # Auth, JWT, user credentials, lockout
│   ├── student-svc/            # Student profile, memberships, eligibility status
│   ├── verification-svc/       # Dual-track verification state machine & strategies
│   ├── institution-svc/        # Colleges, campus rosters, CSV imports
│   ├── business-svc/           # Merchant directory & store partner profiles
│   ├── campaign-offer-svc/     # Student discounts, quotas, validity rules
│   ├── redemption-svc/         # Atomic voucher allocation & redemption
│   ├── notification-svc/       # Kafka event-driven email & SMS dispatcher
│   ├── analytics-svc/          # Aggregated insights & merchant metrics
│   └── audit-svc/              # Immutable audit logging stream
├── workers/                     # Async background workers
│   ├── verification-sync-worker# Scheduled college roster CSV/SFTP sync
│   ├── notification-dispatcher # Real-time notification worker
│   └── offer-expiry-worker     # Campaign TTL & quota reconciliation
├── platform/                    # Shared enterprise platform assets
│   ├── contracts/              # Protocol Buffers (gRPC) & Avro schemas (Kafka)
│   └── sdk/                    # Core libraries (core-auth, core-logger, core-eventbus, core-errors)
├── deployments/                 # Infrastructure as Code (Terraform & K8s)
├── packages/shared/             # Shared TypeScript enums and domain types
├── docker-compose.yml           # Kafka KRaft, Schema Registry, Redis, isolated Postgres DBs
├── turbo.json                   # Turborepo task pipeline
└── package.json                 # npm workspaces root
```

---

## 🚀 Quickstart Guide

### 1. Prerequisites
- **Node.js** >= 20.0.0 (`v25.1.0` tested)
- **npm** >= 10.0.0
- **Docker Desktop** (for local PostgreSQL database)

### 2. Setup Environment
```powershell
# Copy environment variables
Copy-Item .env.example .env
```

### 3. Start Database
```powershell
docker compose up -d
```

### 4. Install Dependencies & Generate Prisma Client
```powershell
npm install
npm run db:generate
```

### 5. Push Schema & Seed Initial Data
```powershell
# Push database schema to PostgreSQL
npm run db:push

# Seed Kathmandu partner colleges (Pulchowk, KU, St. Xavier's, etc.) and demo accounts
npm run db:seed
```

### 6. Run Development Servers
```powershell
# Start both API and Web concurrently:
npm run dev

# Or start individually:
npm run dev:api    # Runs on http://localhost:4000
npm run dev:web    # Runs on http://localhost:3000
```

---

## 🧪 Testing & Code Quality

```powershell
# Run unit tests (Roster normalization, cooldowns, eligibility)
npm test

# Typecheck and lint across all workspaces via Turborepo
npm run lint

# Build production bundles
npm run build
```

---

## 🔑 Demo Credentials

| Role | Email | Password | Access |
|---|---|---|---|
| **Master Admin** | `admin@nepstudent.com` | `Password123!` | `/admin/verifications` (Review queue, claims, approvals) |
| **Student (Track 1 Demo)** | `student@nepstudent.com` | `Password123!` | `/verify` (Pulchowk Campus student: `076BCT012` / `AAYUSH SHRESTHA`) |
