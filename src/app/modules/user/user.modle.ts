import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  profilImage: {
    type: String,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
