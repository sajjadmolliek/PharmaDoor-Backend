// controllers/medicine.controller.ts
import { Request, Response } from 'express';
import { MedicineService } from './medicine.service';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';

const createMedicine = catchAsync(async (req: Request, res: Response) => {
  const result = await MedicineService.createMedicine(req.body);
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Medicine created successfully',
    data: result,
  });
});

const getAllMedicines = catchAsync(async (req: Request, res: Response) => {
  const result = await MedicineService.getAllNonExpiredMedicines();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Non-expired medicines fetched successfully',
    data: result,
  });
});

const markExpiredMedicineController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MedicineService.markExpiredMedicines();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expired medicines updated successfully',
      data: result,
    });
  },
);

export const MedicineController = {
  createMedicine,
  getAllMedicines,
  markExpiredMedicineController,
};
