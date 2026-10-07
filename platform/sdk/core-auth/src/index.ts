// Platform SDK: core-auth
import { Request, Response, NextFunction } from 'express';

export enum UserRole {
  STUDENT = 'STUDENT',
  COLLEGE_ADMIN = 'COLLEGE_ADMIN',
  BUSINESS_ADMIN = 'BUSINESS_ADMIN',
  MASTER_ADMIN = 'MASTER_ADMIN'
}

export interface AuthUserPayload {
  userId: string;
  email: string;
  role: UserRole;
  studentProfileId?: string;
  collegeId?: string;
  merchantId?: string;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUserPayload;
  correlationId?: string;
}

export function requireRole(...allowedRoles: UserRole[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        type: 'https://errors.nepstudent.com/unauthorized',
        title: 'Authentication Required',
        status: 401,
        code: 'UNAUTHORIZED'
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        type: 'https://errors.nepstudent.com/forbidden',
        title: 'Forbidden Access',
        status: 403,
        code: 'FORBIDDEN'
      });
    }

    next();
  };
}
