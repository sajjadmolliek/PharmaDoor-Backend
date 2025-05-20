import { USER_ROLE } from './user.constant';

export interface IUser {
  name: string;
  profilImage: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'pharmacist';
}
export type TUserRole = keyof typeof USER_ROLE;
