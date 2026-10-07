/**
 * @nepstudent/shared
 * Core shared types, enums, constants, and utilities for the NepStudent platform.
 */

// ==========================================
// User & Auth Enums
// ==========================================
export enum UserRole {
  STUDENT = 'STUDENT',
  COLLEGE_ADMIN = 'COLLEGE_ADMIN',
  BUSINESS_ADMIN = 'BUSINESS_ADMIN',
  MASTER_ADMIN = 'MASTER_ADMIN',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  DEACTIVATED = 'DEACTIVATED',
}

// ==========================================
// Verification Enums
// ==========================================
export enum VerificationTrack {
  PARTNER_COLLEGE = 'PARTNER_COLLEGE', // Track 1: Instant roster match
  UNLISTED_COLLEGE = 'UNLISTED_COLLEGE', // Track 2: Manual document review
}

export enum VerificationStatus {
  DRAFT = 'DRAFT', // Initialized, document upload in progress
  SUBMITTED = 'SUBMITTED', // Submitted by student, awaiting review
  IN_REVIEW = 'IN_REVIEW', // Claimed by an admin
  APPROVED = 'APPROVED', // Verified eligible
  REJECTED = 'REJECTED', // Rejected with specific reason
  MORE_INFO_REQUESTED = 'MORE_INFO_REQUESTED', // Student needs to provide more info
  EXPIRED = 'EXPIRED', // Annual verification expired
}

export enum DocumentType {
  STUDENT_ID_FRONT = 'STUDENT_ID_FRONT',
  STUDENT_ID_BACK = 'STUDENT_ID_BACK',
  SELFIE = 'SELFIE',
  ENROLLMENT_LETTER = 'ENROLLMENT_LETTER',
  OTHER = 'OTHER',
}

export enum DeciderType {
  SYSTEM = 'SYSTEM',
  MASTER_ADMIN = 'MASTER_ADMIN',
  COLLEGE_ADMIN = 'COLLEGE_ADMIN',
}

export enum DecisionOutcome {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  MORE_INFO_REQUESTED = 'MORE_INFO_REQUESTED',
}

export enum RejectionReasonCode {
  DOCUMENT_BLURRY = 'DOCUMENT_BLURRY',
  DOCUMENT_EXPIRED = 'DOCUMENT_EXPIRED',
  NAME_MISMATCH = 'NAME_MISMATCH',
  STUDENT_ID_MISMATCH = 'STUDENT_ID_MISMATCH',
  DOB_MISMATCH = 'DOB_MISMATCH',
  NOT_A_STUDENT_ID = 'NOT_A_STUDENT_ID',
  SUSPECTED_FRAUD = 'SUSPECTED_FRAUD',
  INCOMPLETE_INFORMATION = 'INCOMPLETE_INFORMATION',
  OTHER = 'OTHER',
}

export enum RosterMatchResult {
  MATCHED = 'MATCHED',
  NOT_FOUND = 'NOT_FOUND',
  NAME_MISMATCH = 'NAME_MISMATCH',
  DOB_MISMATCH = 'DOB_MISMATCH',
  INACTIVE_RECORD = 'INACTIVE_RECORD',
  EXPIRED_RECORD = 'EXPIRED_RECORD',
  RATE_LIMITED = 'RATE_LIMITED',
}

export enum CollegeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING_REVIEW = 'PENDING_REVIEW',
}

export enum RosterImportStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum EligibilityStatus {
  ELIGIBLE = 'ELIGIBLE',
  NOT_ELIGIBLE = 'NOT_ELIGIBLE',
  EXPIRED = 'EXPIRED',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
}

// ==========================================
// Audit & System Constants
// ==========================================
export enum AuditAction {
  USER_REGISTERED = 'USER_REGISTERED',
  USER_LOGGED_IN = 'USER_LOGGED_IN',
  USER_EMAIL_VERIFIED = 'USER_EMAIL_VERIFIED',
  VERIFICATION_REQUESTED = 'VERIFICATION_REQUESTED',
  ROSTER_MATCH_ATTEMPTED = 'ROSTER_MATCH_ATTEMPTED',
  VERIFICATION_SUBMITTED = 'VERIFICATION_SUBMITTED',
  VERIFICATION_CLAIMED = 'VERIFICATION_CLAIMED',
  VERIFICATION_APPROVED = 'VERIFICATION_APPROVED',
  VERIFICATION_REJECTED = 'VERIFICATION_REJECTED',
  VERIFICATION_INFO_REQUESTED = 'VERIFICATION_INFO_REQUESTED',
  VERIFICATION_RESUBMITTED = 'VERIFICATION_RESUBMITTED',
  DOCUMENT_UPLOADED = 'DOCUMENT_UPLOADED',
  ROSTER_IMPORTED = 'ROSTER_IMPORTED',
  COLLEGE_CREATED = 'COLLEGE_CREATED',
  COLLEGE_UPDATED = 'COLLEGE_UPDATED',
}

// ==========================================
// Standard API Envelope Interfaces
// ==========================================
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    requestId?: string;
    timestamp?: string;
    pagination?: PaginationMeta;
  };
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// ==========================================
// Eligibility Check Response
// ==========================================
export interface StudentEligibilityResult {
  isEligible: boolean;
  status: EligibilityStatus;
  studentId: string;
  collegeId?: string;
  collegeName?: string;
  verifiedAt?: string;
  expiresAt?: string;
  reasons?: string[];
}

// ==========================================
// Name Normalization Helper
// ==========================================
/**
 * Normalizes official Nepali student names for robust roster comparison.
 * - Strips leading/trailing/multiple whitespaces
 * - Converts to uppercase
 * - Strips standard non-alphabetic noise characters (commas, dots, etc.)
 */
export function normalizeOfficialName(name: string): string {
  if (!name) return '';
  return name
    .replace(/[.,\-_/\\#@!$%^&*()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

/**
 * Normalizes student ID string (removes whitespace, uppercase, strips leading zeros if alphanumeric format matches)
 */
export function normalizeStudentId(id: string): string {
  if (!id) return '';
  return id.trim().replace(/\s+/g, '').toUpperCase();
}

// ==========================================
// Offer & Redemption Domain Enums & Interfaces
// ==========================================
export enum DiscountType {
  PERCENTAGE = 'PERCENTAGE',
  FIXED_AMOUNT = 'FIXED_AMOUNT',
  FREEBIE = 'FREEBIE',
  BOGO = 'BOGO',
}

export enum OfferStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  EXPIRED = 'EXPIRED',
  DEPLETED = 'DEPLETED',
}

export enum RedemptionStatus {
  COMPLETED = 'COMPLETED',
  REVERSED = 'REVERSED',
  EXPIRED = 'EXPIRED',
}

export interface OfferDTO {
  id: string;
  merchantId: string;
  merchantName?: string;
  title: string;
  description: string;
  discountType: DiscountType;
  discountValue: number;
  promoCode?: string;
  minPurchaseAmount?: number;
  maxDiscountAmount?: number;
  perStudentLimit: number;
  totalQuota?: number;
  remainingQuota?: number;
  validFrom: string;
  validUntil: string;
  status: OfferStatus;
  termsAndConditions?: string;
}

export interface RedemptionResult {
  redemptionId: string;
  offerId: string;
  studentId: string;
  voucherCode: string;
  discountType: DiscountType;
  discountValue: number;
  redeemedAt: string;
  merchantName: string;
}

// ==========================================
// Domain Events & Event Envelope (EDA Core)
// ==========================================
export enum DomainEventType {
  STUDENT_REGISTERED = 'student.registered',
  STUDENT_VERIFIED = 'student.verified',
  STUDENT_REVOKED = 'student.revoked',
  OFFER_CREATED = 'offer.created',
  COUPON_REDEEMED = 'coupon.redeemed',
  REDEMPTION_FAILED = 'redemption.failed',
  BUSINESS_INSIGHTS_AGGREGATED = 'business.insights.aggregated',
}

export interface DomainEventEnvelope<T = unknown> {
  eventId: string;
  eventType: DomainEventType;
  aggregateType: string;
  aggregateId: string;
  timestamp: string;
  correlationId?: string;
  idempotencyKey?: string;
  version: number;
  payload: T;
}

export interface StudentVerifiedEventPayload {
  studentProfileId: string;
  userId: string;
  officialName: string;
  collegeId?: string;
  collegeName?: string;
  studentIdNumber?: string;
  verifiedAt: string;
  expiresAt: string;
  track: VerificationTrack;
}

export interface CouponRedeemedEventPayload {
  redemptionId: string;
  offerId: string;
  offerTitle: string;
  merchantId: string;
  merchantName: string;
  studentProfileId: string;
  studentUserId: string;
  collegeId?: string;
  collegeName?: string;
  discountType: DiscountType;
  discountValue: number;
  voucherCode: string;
  redeemedAt: string;
  idempotencyKey?: string;
}

export interface RedemptionFailedEventPayload {
  offerId: string;
  studentProfileId: string;
  reason: string;
  attemptedAt: string;
}

// ==========================================
// Business Insights & Analytics Interfaces
// ==========================================
export interface MerchantInsights {
  merchantId: string;
  merchantName: string;
  totalRedemptions: number;
  uniqueStudents: number;
  estimatedStudentSavingsNpr: number;
  topOffers: Array<{
    offerId: string;
    title: string;
    redemptionCount: number;
  }>;
  topColleges: Array<{
    collegeId: string;
    collegeName: string;
    count: number;
  }>;
  hourlyDistribution: Array<{
    hour: number;
    count: number;
  }>;
}

// ==========================================
// RFC 7807 Problem Details
// ==========================================
export interface ProblemDetails {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance?: string;
  code: string;
  correlationId?: string;
  invalidParams?: Array<{
    name: string;
    reason: string;
  }>;
}

