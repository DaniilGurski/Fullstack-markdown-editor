"use server";

import { SignupSchema } from "@/app/lib/schemas/signup";
import { createClient } from "@/app/utils/supabase/server";

export async function signUpUser(email: string, password: string) {
  const { auth } = await createClient();
  const { data: user, error } = await auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

export async function signUpAction(data: FormData) {
  const formValues = Object.fromEntries(data);
  const parsed = await SignupSchema.safeParse(formValues);

  if (!parsed.success) {
    return {
      error: parsed.error,
      message: "Invalid signup data",
    };
  }

  const { email, password } = parsed.data;
  try {
    const user = await signUpUser(email, password);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "An unknown error occurred (Signup)" };
    }
  }
}
