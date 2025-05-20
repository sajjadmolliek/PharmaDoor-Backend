import { Types } from 'mongoose';

export type TPhermasists = {
  user: Types.ObjectId;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage?: string;
  address: string;
};
