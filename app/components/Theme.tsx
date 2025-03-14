"use client";

import { useAtomValue } from "jotai";
import { darkThemeOnAtom } from "@/app/lib/atoms";

type TThemeProps = {
  children: React.ReactNode;
};

export default function Theme({ children }: TThemeProps) {
  const darkThemeOn = useAtomValue(darkThemeOnAtom);
  return <div data-theme={darkThemeOn ? "dark" : "light"}>{children}</div>;
}
