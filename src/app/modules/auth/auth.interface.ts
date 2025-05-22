export type TLogin = {
  email: string;
  password: string;
  profilImage: string;
  status?: 'pending' | 'approved' | 'rejected';
};
