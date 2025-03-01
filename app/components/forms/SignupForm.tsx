"use client";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/app/lib/schemas/signup";
import { SignupFormFields } from "@/app/lib/definitions/formFields";
import Link from "next/link";
import { Fieldset, Legend } from "@headlessui/react";
import Button from "@/app/components/buttons/Button";
import FormInput from "@/app/components/FormInput";
import { robotoSlab } from "@/app/fonts";
import { signUpAction } from "@/app/(auth)/signup/action";
import { useState } from "react";
import { isUser, isUserError } from "@/app/lib/typeguards";

export default function SignupForm() {
  const { register, handleSubmit, formState } = useForm<SignupFormFields>({
    resolver: zodResolver(SignupSchema),
  });
  const [submitDetails, setSubmitDetails] = useState({
    success: "",
    error: "",
  });

  const { errors } = formState;

  const onSubmit: SubmitHandler<SignupFormFields> = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    const res = await signUpAction(formData);

    if (isUser(res)) {
      setSubmitDetails({ success: "Confirm your email adress", error: "" });
    } else if (isUserError(res)) {
      setSubmitDetails({ success: "", error: res.message });
    }
  };

  return (
    <form
      className="tablet:max-w-[30rem] tablet:bg-neutral-100 tablet:p-10 mx-auto grid w-full gap-y-2 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1
        className={`${robotoSlab.className} tablet:text-[2rem] text-2xl font-bold`}
      >
        Signup
      </h1>

      <div className="grid gap-6">
        <Fieldset className="grid gap-y-10">
          <Legend className="text-neutral-500">Let's get you started !</Legend>

          <div className="grid gap-6">
            <FormInput
              fieldLabel="Email Adress"
              error={errors.email}
              type="email"
              placeholder="e.g 5opka@gmail.com"
              {...register("email")}
            />

            <FormInput
              fieldLabel="Password"
              error={errors.password}
              type="password"
              placeholder="At least .8 characters"
              {...register("password")}
            />

            <FormInput
              fieldLabel="Confirm password"
              error={errors.confirmPassword}
              type="password"
              placeholder="At least .8 characters"
              {...register("confirmPassword")}
            />
          </div>
        </Fieldset>

        <div aria-live="polite" className="contents">
          {submitDetails.success && (
            <p className="text-neutral-600"> {submitDetails.success} </p>
          )}
          {submitDetails.error && (
            <p className="text-red-500"> {submitDetails.error} </p>
          )}
        </div>

        <div className="grid gap-6 text-center">
          <Button> Signup </Button>

          <p className="tablet:flex-row flex flex-col justify-center gap-2 text-neutral-500">
            Already have an account?
            <Link className="text-orange-200" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
