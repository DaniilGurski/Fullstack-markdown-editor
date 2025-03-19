"use server";

import { LoginSchema } from "@/app/lib/schemas/login";
import { createClient } from "@/app/utils/supabase/server";
import { AuthApiError, isAuthApiError, User } from "@supabase/supabase-js";

export async function loginUser(email: string, password: string) {
  const { auth } = await createClient();
  const { data, error } = await auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data.user;
}

export async function loginAction(
  data: FormData,
): Promise<User | AuthApiError | { message: string }> {
  const formValues = Object.fromEntries(data);
  const parsed = await LoginSchema.safeParse(formValues);

  if (!parsed.success) {
    throw new Error("Invalid login data.");
  }

  const { email, password } = parsed.data;
  try {
    const data = await loginUser(email, password);
    return data;
  } catch (error) {
    if (isAuthApiError(error)) {
      return { ...error };
    }
  }

  return { message: "Unknown error" };
}
