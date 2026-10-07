## Product Context

I am building a Nepal-focused student marketplace and discount platform, initially launching in Kathmandu Valley: Kathmandu, Lalitpur and Bhaktapur.

The long-term idea is similar in concept to UNiDAYS, but designed specifically for the South Asian/Nepalese market.

Students aged 16+ will create an account, verify that they are genuine students, and then access exclusive student discounts from participating businesses.

The platform will eventually have four main user experiences:

1. **Student platform**

   * Student registration and account
   * Student verification
   * Browse/search student offers
   * Save offers
   * Redeem offers
   * View personalised/recommended offers
   * Manage profile and college information

2. **Merchant portal**

   * Businesses create and manage offers
   * Submit offers for approval
   * View offer performance
   * Manage their business profile
   * Eventually pay a monthly listing/subscription fee
   * No transaction commission initially

3. **College portal**

   * Partner colleges manage their relationship with the platform
   * College staff can provide/manage student records
   * Review verification cases when required
   * Manage authorised college staff
   * Eventually manage verification settings and student/enrollment data

4. **Master admin platform**

   * Internal company dashboard controlling the whole platform
   * Students
   * Colleges
   * Businesses
   * Offers
   * Promotions
   * Redemptions
   * Verification
   * Analytics
   * Billing/subscriptions
   * Staff/admin permissions
   * Audit logs
   * Fraud/risk management

The current work is focused specifically on the **student verification/eligibility subsystem**, but it must be designed with this eventual platform in mind.

---

# The Important Product Concept

The platform is not fundamentally a "document verification website".

The real objective is to determine:

> **Is this person currently an eligible student who should have access to student-only benefits?**

The way we determine that can vary.

For example:

* A partner college may provide an authoritative student roster.
* Another college may require manual document verification.
* A future college may provide an API/SIS integration.
* A future third-party identity provider may be used.
* Some cases may require manual review.

Therefore, do not design the rest of the platform around a particular verification method.

The rest of the platform should ultimately be able to ask something conceptually like:

```text
Is this student currently eligible?
```

or:

```text
Get this student's current eligibility.
```

without needing to know whether the student was verified through a roster, document review, college confirmation, or another method.

---

# Student Identity vs Verification vs Eligibility

Keep these as separate concepts.

A simplified conceptual model is:

```text
User
 ↓
Student Profile
 ↓
College Membership / Enrollment
 ↓
Verification
 ↓
Verification Decision
 ↓
Student Eligibility
```

A student account should not simply have:

```text
isVerified = true
```

because verification can expire, be suspended, be repeated, or change when the student changes colleges.

A student can also potentially have multiple college memberships over time.

For example:

```text
Student
 ├── College A membership
 │      └── verified 2026
 │
 └── College B membership
        └── verified 2027
```

The account remains the same student account.

---

# Partner College Verification

Partner colleges are particularly important to the long-term product.

If a college provides authoritative student information, we should avoid making every student upload documents and selfies.

The intended flow is:

```text
Student selects college
        ↓
Enters official details
        ↓
System checks authoritative college record
        ↓
Match
        ↓
Instant / low-friction verification
        ↓
Student becomes eligible
```

The student may enter:

* Official name
* Date of birth
* Student ID / registration number
* Programme
* Academic year
* Student ID expiry date
* Other institution-specific information

The student's name should be entered exactly as it appears on their:

> Citizenship Certificate or National ID

The platform should use `officialName` as the canonical name.

Formatting differences such as uppercase/lowercase or extra whitespace can be normalized.

Do not rely on aggressive fuzzy matching for automatic approval.

The college roster is authoritative for enrollment information.

---

# College Student Records

A college's student roster is NOT the same thing as a list of users who have registered on the platform.

A college may provide 10,000 student records even though only 300 students have accounts on our platform.

Therefore, keep the concepts separate:

```text
Platform User
```

and

```text
College Student Record
```

A college student record can contain information such as:

```text
collegeId
externalStudentId
officialName
dateOfBirth
programme
academicYear
enrollmentStatus
studentIdExpiryDate
validFrom
validUntil
source
```

The exact fields should remain configurable because different colleges may provide different information.

The important point is that the platform should be able to match a registered user against an authoritative institutional record without creating a platform account for every student in the college.

---

# College Data Sources

Do not assume colleges will always provide data through the same mechanism.

Eventually the platform may support:

```text
CSV upload
Excel upload
Manual college entry
API integration
Scheduled synchronisation
SIS integration
```

Therefore, the architecture should have an abstraction around the college's student data source.

The current MVP may use imported data, but the underlying design should not make CSV the permanent assumption.

---

# Verification Methods

The verification domain should support multiple methods.

For example:

```text
ROSTER
DOCUMENT_REVIEW
MANUAL
THIRD_PARTY
```

The exact implementation can evolve.

The important architectural principle is:

> Verification method is an implementation detail of how eligibility is established.

The marketplace should not care whether the student was verified by roster matching or by a human reviewer.

---

# Different Colleges Can Have Different Rules

Do not assume every college follows exactly the same verification process.

For example:

### College A

```text
Name
DOB
Student ID
→ roster match
→ instant verification
```

### College B

```text
Name
DOB
Student ID
Expiry date
→ roster match
→ instant verification
```

### College C

```text
Roster match
→ additional document required
→ manual review
```

### Non-partner college

```text
Student details
→ ID document
→ selfie
→ manual review
```

Therefore, verification requirements should eventually be configurable per college rather than hardcoded into the student registration flow.

---

# Verification Lifecycle

Verification is not a permanent boolean.

It should be possible for a verification to move through states such as:

```text
NOT_STARTED
DRAFT
SUBMITTED
PENDING_REVIEW
IN_REVIEW
MORE_INFORMATION_REQUIRED
APPROVED
REJECTED
EXPIRED
SUSPENDED
CANCELLED
```

The exact state machine can evolve, but state transitions should be controlled by domain/application logic rather than arbitrary controller updates.

Examples:

```text
SUBMITTED → PENDING_REVIEW
PENDING_REVIEW → APPROVED
PENDING_REVIEW → REJECTED
PENDING_REVIEW → MORE_INFORMATION_REQUIRED
APPROVED → EXPIRED
APPROVED → SUSPENDED
```

---

# Student Eligibility

Eventually, other parts of the platform will depend on verification.

For example:

```text
Student wants to view/redeem a student-only offer
        ↓
Marketplace asks eligibility system
        ↓
Is student eligible?
        ↓
YES
        ↓
Allow access
```

The offers/redemption systems should not query verification tables directly.

Ideally there should be a clean application/domain interface such as:

```text
isStudentEligible(studentId)
getStudentEligibility(studentId)
getActiveEnrollment(studentId)
```

This creates a boundary between the verification/eligibility domain and the future marketplace.

---

# Why This Matters for the Future

The eventual platform will contain:

```text
Accounts
Students
Colleges
Verification
Eligibility
Businesses
Offers
Promotions
Redemption
Subscriptions
Notifications
Analytics
Audit
Fraud/Risk
```

The current verification work should therefore be modular enough that these future modules can be added without rewriting verification.

For example:

```text
Verification
      ↓
Eligibility
      ↓
Offers
      ↓
Redemption
```

The offer system should not need to know:

* whether a college uploaded a CSV
* whether a human approved the student
* whether an API matched them
* whether a document was reviewed

It only needs to know whether the student is currently eligible.

---

# Future Student Verification Improvements

The initial system should leave room for:

### Re-verification

A student may need to be reverified because:

* verification expires
* student changes college
* college reports inactive enrollment
* student graduates
* suspicious activity is detected
* college requests re-verification
* account recovery requires additional verification

### Fraud prevention

Eventually the system should detect signals such as:

* Same student ID used by multiple accounts
* Multiple accounts attempting to use the same identity
* Repeated failed verification
* Suspicious college changes
* Suspicious document submissions
* Unusual redemption behaviour
* Account takeover indicators

This does not need to become a complex AI fraud system now.

The architecture simply needs to leave a clean place for risk/fraud rules later.

---

# College Partnership

A college itself will eventually have a lifecycle.

For example:

```text
PROSPECT
APPLICATION
UNDER_REVIEW
APPROVED
ONBOARDING
ACTIVE
SUSPENDED
TERMINATED
```

Only active partner colleges should be able to use institutional verification capabilities.

The master admin should always retain visibility and control.

---

# College Staff

A partner college may have multiple authorised staff members.

Eventually there could be roles such as:

```text
COLLEGE_ADMIN
COLLEGE_VERIFIER
```

College staff should only be able to access their own institution's data.

The master admin platform should have broader permissions.

Use permission-based access control rather than scattering hardcoded role checks throughout the code.

---

# Security and Privacy

College student records are sensitive institutional data.

Do not expose endpoints such as:

```text
GET /students/check?studentId=12345
```

to unauthenticated users.

Someone should not be able to enumerate student IDs and discover whether a person is enrolled.

Matching should happen inside an authenticated verification workflow with:

* Rate limiting
* Tenant isolation
* Generic failure responses
* Audit logging
* Access controls
* Appropriate data retention
* Secure handling of identity documents

If documents are eventually stored, they should be private and accessed through authorised, short-lived signed URLs.

---

# Auditability

Verification decisions need a history.

We should eventually be able to answer:

* Who approved this student?
* Was it automatic or manual?
* Which verification method was used?
* Which college record matched?
* When was the decision made?
* Who changed the decision?
* Why was it rejected?
* Why was additional information requested?
* When did eligibility expire?

Important verification events should therefore be auditable.

---

# Important Architectural Principle

Do not overbuild the current MVP.

At the same time, do not create shortcuts that make the future architecture difficult.

The goal is:

> **Simple initial implementation, strong domain boundaries, extensible verification methods.**

Use a modular monolith initially.

The eventual architecture can look conceptually like:

```text
                    ┌───────────────┐
                    │ Student       │
                    │ Platform      │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Eligibility   │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Verification  │
                    └───────┬───────┘
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
         College         Documents      Future
         Roster           Review        Providers
             │
             ▼
       College Portal
```

The current task is only to build/design the verification portion, but every decision should be made with this broader product model in mind.

Do not implement the merchant marketplace, offers, redemption, billing, promotions or analytics yet unless specifically requested. They are future modules that the verification system will eventually integrate with.
