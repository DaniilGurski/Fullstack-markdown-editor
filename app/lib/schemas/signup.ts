import { FormSchema } from "@/app/lib/schemas/form";

export const SignupSchema = FormSchema.superRefine(
  ({ confirmPassword, password }, ctx) => {
    // Assert confirmPassword equals password
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Please check again",
        path: ["password"],
      });
    }
  },
);
