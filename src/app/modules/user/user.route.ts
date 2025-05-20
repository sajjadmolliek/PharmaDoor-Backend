// user.route.ts
import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userZodValidationScema } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userZodValidationScema.createUserZodSchema),
  UserController.createUsers,
);
router.get(
  '/',
  //   validateRequest(userZodValidationScema.createUserZodSchema),
  UserController.getAllUser,
);
router.get('/:id', UserController.getSingleUser);
router.patch(
  '/:id',
  validateRequest(userZodValidationScema.updatedUserZodSchema),
  UserController.updatedUser,
);
router.delete('/:id', UserController.deletedUser);

export const UserRoutes = router;
