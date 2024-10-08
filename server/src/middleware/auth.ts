// middleware/authenticate.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    next(new AppError("Unauthorized: Please login first.", 401))
  }
};
export const isCompleteAuth = (req: any, res: Response, next: NextFunction) => {
  if (req.isAuthenticated() && req.user.completed) {
    return next();
  } else {
    next(new AppError("Unauthorized: Please login && add dob first.", 401))
  }
};
