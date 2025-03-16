import React from "react";
import clsx from "clsx";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type THeadingProps = {
  level: HeadingLevel;
  children: React.ReactNode;
};

const headingStyles = {
  h1: "text-neutral-700 text-[2rem] font-bold theme-dark:text-neutral-100",
  h2: "text-neutral-700 text-[1.75rem] font-light theme-dark:text-neutral-100",
  h3: "text-neutral-700 text-2xl font-bold theme-dark:text-neutral-100",
  h4: "text-neutral-700 text-xl font-bold theme-dark:text-neutral-100",
  h5: "text-neutral-700 text-base font-bold theme-dark:text-neutral-100",
  h6: "text-orange-200 text-sm font-bold",
};

export default function Heading({ level, children }: THeadingProps) {
  switch (level) {
    case "h1":
      return <h1 className={headingStyles.h1}> {children} </h1>;
    case "h2":
      return <h2 className={headingStyles.h2}> {children} </h2>;
    case "h3":
      return <h3 className={headingStyles.h3}> {children} </h3>;
    case "h4":
      return <h4 className={headingStyles.h4}> {children} </h4>;
    case "h5":
      return <h5 className={headingStyles.h5}> {children} </h5>;
    case "h6":
      return <h6 className={headingStyles.h6}> {children} </h6>;
  }
}
