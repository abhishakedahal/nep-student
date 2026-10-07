
import { Router } from 'express';
import { StudentBffController } from '../controllers/student.controller.js';

export const studentRoutes = Router();
studentRoutes.get('/offers', StudentBffController.getCatalog);
studentRoutes.get('/verification/:studentId', StudentBffController.verifyStatus);
studentRoutes.post('/redeem', StudentBffController.redeemCoupon);
