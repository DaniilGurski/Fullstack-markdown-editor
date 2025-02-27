import Link from "next/link";
import { Fieldset, Legend } from "@headlessui/react";
import Button from "@/app/components/Button";
import FormInput from "@/app/components/FormInput";
import { robotoSlab } from "@/app/fonts";

export default function LoginForm() {
  return (
    <form className="tablet:max-w-[30rem] tablet:bg-neutral-100 tablet:p-10 mx-auto grid w-full gap-y-2 rounded-xl">
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
              error={undefined}
              type="email"
              placeholder="e.g 5opka@gmail.com"
            />

            <FormInput
              fieldLabel="Password"
              error={undefined}
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </Fieldset>

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
