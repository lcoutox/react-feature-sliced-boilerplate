import baseApi from "@/shared/api/base-api";
import { mapSession } from "../lib/map-session";
import { Session } from "../model/types";
import { RequestLoginBody } from "./types";

export async function login (body: RequestLoginBody): Promise<Session> {
  const response = await baseApi.post('/auth/login', body)

  if (response.status !== 200) {
    throw new Error('Failed to login');
  }
  return mapSession(response.data);
}