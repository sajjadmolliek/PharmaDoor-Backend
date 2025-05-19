import { IUser } from './user.interface';
import UserModle from './user.modle';

const createUser = async (payload: IUser) => {
  const result = await UserModle.create(payload);
  return result;
};

export const UserServices = {
  createUser,
};
