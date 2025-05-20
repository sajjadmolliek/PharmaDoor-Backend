import AppError from '../../error/app.error';
import { IUser } from './user.interface';
import UserModle from './user.modle';
import httpStatus from 'http-status';
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
export const UserServices = {
  createUser,
  getAllUser,
  getSingleUser,
  deletedUser,
  updatedUser,
};
