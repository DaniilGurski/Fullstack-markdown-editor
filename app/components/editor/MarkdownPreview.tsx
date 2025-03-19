"use client";

import clsx from "clsx";
import { robotoSlab } from "@/app/fonts";
import Markdown from "marked-react";
import "@/app/preview.css";

type TMarkdownPreviewProps = {
  children: string;
};

export default function MarkdownPreview({ children }: TMarkdownPreviewProps) {
  return (
    <div
      className={clsx(
        "theme-dark:text-neutral-400 mobile:py-5 mobile:px-6 grid w-full content-start gap-y-5 overflow-x-clip px-5 py-4 text-sm text-neutral-500 peer-[[data-hidden=false]]:hidden peer-[[data-hidden=true]]:col-span-2 peer-[[data-hidden=true]]:mx-auto peer-[[data-hidden=true]]:max-w-2xl @sm:py-2 @sm:peer-[[data-hidden=false]]:grid",
        robotoSlab.className,
      )}
      id="markdown-preview"
    >
      <Markdown>
        {Array.isArray(children) ? children.join("") : children}
      </Markdown>
    </div>
  );
}
