import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userZodValidationScema } from './user.validation';
import { adminZodValidationSchema } from '../admin/admin.validation';
import { phermasistZodValidationSchema } from '../phermasist/phermasist.validation';

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
    phermasistZodValidationSchema.createPhermasistValidationSchema,
  ),
  UserController.createPhermasist,
);
router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getSingleUser);
router.patch(
  '/:id',
  validateRequest(userZodValidationScema.updatedUserZodSchema),
  UserController.updatedUser,
);
router.delete('/:id', UserController.deletedUser);

export const UserRoutes = router;
