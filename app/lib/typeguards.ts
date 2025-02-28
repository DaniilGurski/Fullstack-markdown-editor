import { type User } from "@supabase/auth-js";

export const isUser = (object: unknown): object is User => {
  if (
    object !== null &&
    typeof object === "object" &&
    Object.hasOwn(object, "user")
  ) {
    return true;
  }
  return false;
};

export const isUserError = (object: unknown): object is { message: string } => {
  if (
    object !== null &&
    typeof object === "object" &&
    Object.hasOwn(object, "message")
  ) {
    return true;
  }
  return false;
};
