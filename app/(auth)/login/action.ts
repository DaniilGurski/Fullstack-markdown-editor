"use server";

import { LoginSchema } from "@/app/lib/schemas/login";
import { createClient } from "@/app/utils/supabase/server";

export async function loginUser(email: string, password: string) {
  const { auth } = await createClient();
  const { data: user, error } = await auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

export async function loginAction(data: FormData) {
  const formValues = Object.fromEntries(data);
  const parsed = await LoginSchema.safeParse(formValues);

  if (!parsed.success) {
    return {
      error: parsed.error,
      message: "Invalid login data",
    };
  }

  const { email, password } = parsed.data;
  try {
    const user = await loginUser(email, password);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "An unknown error occurred (Login) " };
    }
  }
}
