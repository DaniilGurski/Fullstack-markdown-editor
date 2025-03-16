import { robotoMono } from "@/app/fonts";
import clsx from "clsx";

type TCodeSnippetProps = {
  type: "inline" | "block";
  children: React.ReactNode;
};

const codeSnippetStyles = {
  inline: "text-neutral-700 theme-dark:text-neutral-100",
  block:
    "text-neutral-700 theme-dark:text-neutral-100 p-6 bg-neutral-200 theme-dark:bg-neutral-800 rounded-sm",
};

export default function CodeSnippet({ type, children }: TCodeSnippetProps) {
  return (
    <code className={clsx(codeSnippetStyles[type], robotoMono.className, "p-")}>
      {children}
    </code>
  );
}
