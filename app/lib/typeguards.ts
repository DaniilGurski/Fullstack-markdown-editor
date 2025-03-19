import { type User } from "@supabase/auth-js";
import { TDocument } from "@/app/lib/definitions/schemas";

export const isUser = (object: unknown): object is User => {
  if (
    object !== null &&
    typeof object === "object" &&
    Object.hasOwn(object, "email")
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

export const isUserDocument = (object: unknown): object is TDocument => {
  if (
    object !== null &&
    typeof object === "object" &&
    Object.hasOwn(object, "id")
  ) {
    return true;
  }

  return false;
};
