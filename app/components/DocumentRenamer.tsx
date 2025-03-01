import Image from "next/image";
import { Field, Input, Label } from "@headlessui/react";
import iconDocument from "@/public/assets/icon-document.svg";

export default function DocumentRenamer() {
  // TODO: Make a function that appends .md to the end of the string if it doesn't exist. If the input is empty, set the value to “Untitled document.md”.
  return (
    <form className="flex items-center gap-4 text-neutral-100">
      <Image className="" src={iconDocument} alt="document" />

      <Field className="grid">
        <Label className="mobile:inline-block hidden text-sm font-light text-neutral-300">
          Document Name
        </Label>
        <Input className="border-b-2 border-transparent pb-1 caret-orange-200 focus:border-neutral-100 focus:border-b-neutral-100 focus:outline-0" />
      </Field>
    </form>
  );
}
