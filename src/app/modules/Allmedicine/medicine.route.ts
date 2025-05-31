// routes/medicine.routes.ts

import express from 'express';
import { MedicineController } from './medicine.controller';

const router = express.Router();

router.post('/', MedicineController.createMedicine);
router.get('/', MedicineController.getAllMedicines);
router.patch('/mark-expired', MedicineController.markExpiredMedicineController); // << new route

export const MedicineRoute = router;
