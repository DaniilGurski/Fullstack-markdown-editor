"use client";

import Image from "next/image";
import { Field, Switch, Label } from "@headlessui/react";
import { useAtom } from "jotai";
import { darkModeOnAtom } from "@/app/lib/atoms";
import iconLightMode from "@/public/assets/icon-light-mode.svg";
import iconDarkMode from "@/public/assets/icon-dark-mode.svg";

export default function ThemeSwitch() {
  const [darkModeOn, setDarkModeOn] = useAtom(darkModeOnAtom);

  return (
    <Field>
      <Label className="sr-only"> Toggle dark mode </Label>

      <div className="theme-switch-container flex items-center gap-x-3">
        <Image className="" src={iconLightMode} alt="" aria-hidden="true" />

        <Switch
          className="group relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-neutral-600"
          checked={darkModeOn}
          onChange={setDarkModeOn}
        >
          <span className="size-4 translate-x-1 rounded-full bg-neutral-100 transition group-data-[checked]:translate-x-6"></span>
        </Switch>

        <Image className="" src={iconDarkMode} alt="" aria-hidden="true" />
      </div>
    </Field>
  );
}
