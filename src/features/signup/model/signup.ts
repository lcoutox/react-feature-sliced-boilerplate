import { signup } from '@/entities/signup/api/signup-api';

type Params = {
  name: string
  email: string;
  password: string;
};

export const signupRequest = async (params: Params) => {
  try {
    await signup(params);
  } catch (error) {
    throw new Error('Unknown error');
  }
};