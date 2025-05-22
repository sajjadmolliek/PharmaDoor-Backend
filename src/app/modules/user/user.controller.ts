import { Request, Response } from 'express';
import { UserServices } from './user.service';
import httpStatus from 'http-status';

import sendResponse from '../utils/sendResponse';
import catchAsync from '../utils/catchAsync';

const createUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});
const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all user retrive successfully',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserServices.getSingleUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get single user retrive successfully',
    data: result,
  });
});
const deletedUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserServices.deletedUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});
const updatedUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserServices.updatedUser(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;
  const result = await UserServices.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin Created is successfully',
    data: result,
  });
});
const createPhermasist = catchAsync(async (req, res) => {
  console.log('Request body:', req.body);
  const { password, pharmacist: phermasistData } = req.body;
  const result = await UserServices.createPhermasistIntoDB(
    password,
    phermasistData,
  );
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Phermasist Created is successfully',
    data: result,
  });
});
export const UserController = {
  createUsers,
  getAllUser,
  getSingleUser,
  deletedUser,
  updatedUser,
  createAdmin,
  createPhermasist,
};
