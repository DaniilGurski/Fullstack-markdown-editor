import { FormSchema } from "@/app/lib/schemas/form";

export const LoginSchema = FormSchema.omit({ confirmPassword: true });
