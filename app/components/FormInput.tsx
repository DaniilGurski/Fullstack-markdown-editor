import clsx from "clsx";
import { Description, Field, Input, Label } from "@headlessui/react";
import { FieldError } from "react-hook-form";

type TFormInputProps = React.ComponentPropsWithoutRef<"input"> & {
  fieldLabel: string;
  error: FieldError | undefined;
};

export default function FormInput({
  fieldLabel,
  error,
  ...rest
}: TFormInputProps) {
  return (
    <Field className="grid gap-y-1">
      <Label className="text-xs text-neutral-800"> {fieldLabel} </Label>

      <div
        className={clsx(
          "relative rounded-lg border-2 border-neutral-400 px-4 py-3 focus-within:border-orange-100 focus-within:caret-orange-100",
          error &&
            "border-red-500 focus-within:border-red-500 focus-within:caret-red-500",
        )}
      >
        <Input className="w-full focus:outline-none" {...rest} />

        <Description className="absolute top-[50%] right-3 translate-y-[-50%] text-xs text-red-500">
          {error?.message}
        </Description>
      </div>
    </Field>
  );
}
