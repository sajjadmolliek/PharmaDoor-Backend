import { model, Schema } from 'mongoose';
import { TPhermasists } from './phermasist.interface';

const phermasistsSchema = new Schema<TPhermasists>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const PhermasistModle = model<TPhermasists>('phermasist', phermasistsSchema);

export default PhermasistModle;
