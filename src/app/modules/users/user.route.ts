import express from 'express';
import { UserController } from './user.controller';
import requestValidation from '../../../middleware/requestValidation';
import { UserValidation } from './user.validation';
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getSingleUser);
router.patch(
  '/:id',
  requestValidation(UserValidation.updateUserzodValidationSchema),
  UserController.updateSingleUser
);
router.delete('/:id', UserController.deleteSingleUser);
export const UserRoutes = router;
