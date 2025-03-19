"use client";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/lib/schemas/login";
import { LoginFormFields } from "@/app/lib/definitions/formFields";
import Link from "next/link";
import { Fieldset, Legend } from "@headlessui/react";
import Button from "@/app/components/buttons/Button";
import FormInput from "@/app/components/FormInput";
import { robotoSlab } from "@/app/fonts";
import { loginAction } from "@/app/(auth)/login/action";
import { useState } from "react";
import { isAuthApiError } from "@supabase/supabase-js";
import { isUser } from "@/app/lib/typeguards";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const { register, handleSubmit, formState } = useForm<LoginFormFields>({
    resolver: zodResolver(LoginSchema),
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { errors } = formState;

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const res = await loginAction(formData);

    if (isUser(res)) {
      redirect("/editor");
    }

    if (isAuthApiError(res)) {
      if (res.code === "invalid_credentials") {
        setErrorMessage("Invalid credentials.");
      }
    } else {
      setErrorMessage("Unknown error occurred.");
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
        Login
      </h1>

      <div className="grid gap-6">
        <Fieldset className="grid gap-y-10">
          <Legend className="text-neutral-500">
            Add your details below to get back into the app
          </Legend>

          <div className="grid gap-6">
            <FormInput
              fieldLabel="Email Adress"
              error={errors.email}
              placeholder="e.g 5opka@gmail.com"
              {...register("email")}
            />

            <FormInput
              fieldLabel="Password"
              error={errors.password}
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
        </Fieldset>

        <div aria-live="polite" className="contents">
          {errorMessage && (
            <p className="font-bold text-red-400">{errorMessage}</p>
          )}
        </div>

        <div className="grid gap-6 text-center">
          <Button> Login </Button>

          <p className="tablet:flex-row flex flex-col justify-center gap-2 text-neutral-500">
            Don't have an account ?
            <Link className="text-orange-200" href="/signup">
              Signup now
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
