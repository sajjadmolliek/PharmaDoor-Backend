import mongoose from 'mongoose';
import AppError from '../../error/app.error';
import AdminModle from '../admin/admin.modle';
import { IUser } from './user.interface';
import UserModle from './user.modle';
import httpStatus from 'http-status';
import User from './user.modle';
import { TAdmin } from '../admin/admin.interface';
import { TPhermasists } from '../phermasist/phermasist.interface';
import PhermasistModle from '../phermasist/phermasist.modle';
const createUser = async (payload: IUser) => {
  const result = await UserModle.create(payload);
  return result;
};
//get all user
const getAllUser = async () => {
  const result = await UserModle.find();

  return result;
};
//get single user by id
const getSingleUser = async (userId: string) => {
  const result = await UserModle.findById(userId);
  return result;
};
//user deleteing

const deletedUser = async (userId: string) => {
  const result = await UserModle.findByIdAndDelete(userId);
  return result;
};

//user updated

const updatedUser = async (userId: string, payload: Partial<IUser>) => {
  const result = await UserModle.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  return result;
};

const createAdminIntoDB = async (password: string, payload: TAdmin) => {
  const userData: Partial<IUser> = {
    role: 'admin',
    email: payload.email,
    name: payload.name,
  };
  userData.password = password;
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    payload.user = newUser[0]._id;

    const newAdmin = await AdminModle.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    session.endSession();

    return newAdmin[0];
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};
const createPhermasistIntoDB = async (
  password: string,
  payload: TPhermasists,
) => {
  const userData: Partial<IUser> = {
    role: 'pharmacist',
    email: payload.email,
    name: payload.name,
    status: payload.status,
  };
  console.log(userData);
  userData.password = password;
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    payload.user = newUser[0]._id;

    const newPhermasist = await PhermasistModle.create([payload], { session });

    if (!newPhermasist.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create phermasist');
    }

    await session.commitTransaction();
    session.endSession();

    return newPhermasist[0];
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};
export const UserServices = {
  createUser,
  getAllUser,
  getSingleUser,
  deletedUser,
  updatedUser,
  createAdminIntoDB,
  createPhermasistIntoDB,
};
