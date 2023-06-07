import baseApi from "@/shared/api/base-api";
import { RequestSignUpBody } from "./types";
import { SignUp } from "../model/types";

export async function signup (body: RequestSignUpBody): Promise<SignUp> {
  const response = await baseApi.post('/auth/signup', body)

  if (response.status !== 200) {
    throw new Error('Failed to login');
  }
  return response.data
}