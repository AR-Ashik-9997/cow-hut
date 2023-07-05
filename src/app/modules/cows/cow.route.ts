import express from 'express';
import requestValidation from '../../../middleware/requestValidation';
import { CowController } from './cow.controller';
import { CowValidation } from './cow.validation';
const router = express.Router();
router.post(
  '/',
  requestValidation(CowValidation.createCowzodValidationSchema),
  CowController.createCow
);
router.get('/', CowController.getAllCows);
router.get('/:id', CowController.getSingleCow);
router.patch(
  '/:id',
  requestValidation(CowValidation.updateCowzodValidationSchema),
  CowController.updateCow
);
router.delete('/:id', CowController.deleteCow);

export const CowRoutes = router;
