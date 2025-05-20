import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    profilImage: z.string({
      required_error: 'Profile image is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Invalid email format'),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, 'Password must be at least 6 characters'),
    role: z.enum(['user', 'admin', 'phermasists'], {
      required_error:
        'Role is required and must be one of user | admin | phermasists',
    }),
  }),
});

const updatedUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    profilImage: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .optional(),
    role: z.enum(['user', 'admin', 'phermasists']).optional(),
  }),
});

export const userZodValidationScema = {
  createUserZodSchema,
  updatedUserZodSchema,
};
