/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUsers = async (req: Request, res: Response) => {
  const { payload } = req.body;
  const result = await UserServices.createUser(payload);
  return result;
};

export const UserController = {
  createUsers,
};
