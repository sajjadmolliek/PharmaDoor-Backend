import User from './user.modle';

const createUser = async () => {
  const result = await User.create();
  return result;
};

export const UserServices = {
  createUser,
};
