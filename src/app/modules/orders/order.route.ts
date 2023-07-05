import express from 'express';
import { OrderController } from './order.controller';
import requestValidation from '../../../middleware/requestValidation';
import { OrderValidation } from './order.validation';
const router = express.Router();

router.post(
  '/',
  requestValidation(OrderValidation.createOrderzodValidationSchema),
  OrderController.createOrder
);
router.get('/', OrderController.getAllOrders);
export const OrderRoutes = router;
