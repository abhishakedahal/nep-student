// Platform SDK: core-errors (RFC 7807 Problem Details compliant)
export interface ProblemDetails {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance?: string;
  code: string;
  correlationId?: string;
  invalidParams?: Array<{ name: string; reason: string }>;
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly errorCode: string;
  public readonly isOperational: boolean;
  public readonly details?: unknown;

  constructor(
    message: string,
    statusCode: number = 500,
    errorCode: string = 'INTERNAL_SERVER_ERROR',
    details?: unknown
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public toProblemDetails(instance?: string, correlationId?: string): ProblemDetails {
    return {
      type: `https://errors.nepstudent.com/${this.errorCode.toLowerCase().replace(/_/g, '-')}`,
      title: this.message,
      status: this.statusCode,
      detail: this.message,
      instance,
      code: this.errorCode,
      correlationId,
      invalidParams: Array.isArray(this.details) ? this.details : undefined
    };
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = 'Bad request', errorCode: string = 'BAD_REQUEST', details?: unknown) {
    super(message, 400, errorCode, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized', errorCode: string = 'UNAUTHORIZED', details?: unknown) {
    super(message, 401, errorCode, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden access', errorCode: string = 'FORBIDDEN', details?: unknown) {
    super(message, 403, errorCode, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found', errorCode: string = 'NOT_FOUND', details?: unknown) {
    super(message, 404, errorCode, details);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'Conflict detected', errorCode: string = 'CONFLICT', details?: unknown) {
    super(message, 409, errorCode, details);
  }
}

export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed', details?: unknown) {
    super(message, 422, 'VALIDATION_ERROR', details);
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message: string = 'Too many requests', details?: unknown) {
    super(message, 429, 'TOO_MANY_REQUESTS', details);
  }
}
