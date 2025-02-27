import { z } from "zod";
import { LoginSchema } from "@/app/lib/schemas/login";
import { SignupSchema } from "@/app/lib/schemas/signup";

export type SignupFormFields = z.infer<typeof SignupSchema>;
export type LoginFormFields = z.infer<typeof LoginSchema>;
