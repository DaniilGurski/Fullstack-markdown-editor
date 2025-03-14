"use client";

import clsx from "clsx";

export default function MarkdownPreview() {
  return (
    <div
      className={clsx(
        "theme-dark:bg-neutral-1000 theme-dark:text-neutral-400 w-full bg-neutral-100 p-4 peer-[[data-hidden=false]]:hidden peer-[[data-hidden=true]]:col-span-2 peer-[[data-hidden=true]]:mx-auto peer-[[data-hidden=true]]:max-w-2xl @sm:py-2 @sm:peer-[[data-hidden=false]]:block",
      )}
    ></div>
  );
}
