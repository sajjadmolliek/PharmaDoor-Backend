export interface IUser {
  name: string;
  profilImage: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'phermasists';
}
