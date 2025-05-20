import express from 'express';
import { PhermasistController } from './phermasist.controller';
import validateRequest from '../../middlewares/validateRequest';
import { phermasistZodValidationSchema } from './phermasist.validation';

const router = express.Router();

router.get('/', PhermasistController.getAllPhermasist);
router.get('/:id', PhermasistController.getSinglePhermasist);
router.patch(
  '/:id',
  validateRequest(
    phermasistZodValidationSchema.updatePhermasistValidationSchema,
  ),
  PhermasistController.updatePhermasist,
);
router.delete('/:id', PhermasistController.deletePhermasist);

export const PhermasistRoute = router;
