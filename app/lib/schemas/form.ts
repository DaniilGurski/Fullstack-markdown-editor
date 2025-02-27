import { z } from "zod";

export const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Can't be empty" })
    .email({ message: "Not valid email adress" }),
  password: z.string().trim().min(8, { message: "Missing characters" }),
  confirmPassword: z.string().trim().min(8),
});
