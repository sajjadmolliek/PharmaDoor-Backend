import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userZodValidationScema } from './user.validation';
import { adminZodValidationSchema } from '../admin/admin.validation';
import { pharmacistZodValidationSchema } from '../phermasist/phermasist.validation';
import authValidateRequest from '../../middlewares/auth.validationRequest';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userZodValidationScema.createUserZodSchema),
  UserController.createUsers,
);
router.post(
  '/create-admin',
  validateRequest(adminZodValidationSchema.createAdminValidationSchema),
  UserController.createAdmin,
);
router.post(
  '/create-phermasist',
  validateRequest(
    pharmacistZodValidationSchema.createPharmacistValidationSchema,
  ),
  UserController.createPhermasist,
);
router.get(
  '/',
  authValidateRequest(USER_ROLE.admin),

  UserController.getAllUser,
);
router.get('/:id', UserController.getSingleUser);
router.patch(
  '/:id',
  authValidateRequest(USER_ROLE.admin, USER_ROLE.pharmacist),

  validateRequest(userZodValidationScema.updatedUserZodSchema),
  UserController.updatedUser,
);
router.delete('/:id', UserController.deletedUser);

export const UserRoutes = router;
