import TogglePreviewButton from "@/app/components/editor/TogglePreviewButton";
import { useAtomValue } from "jotai";
import { markdownPreviewOpenedAtom } from "@/app/lib/atoms";
import clsx from "clsx";

export default function EditorHeader() {
  const markdownPreviewOpened = useAtomValue(markdownPreviewOpenedAtom);

  return (
    <header className="theme-dark:bg-neutral-900 theme-dark:text-neutral-400 theme-dark:divide-neutral-600 grid grid-cols-1 divide-x-[1px] divide-neutral-300 bg-neutral-200 font-medium text-neutral-500 @sm:grid-cols-2">
      <div
        className={clsx(
          "justify-between p-4",
          !markdownPreviewOpened ? "flex" : "hidden",
        )}
      >
        <span> Markdown </span>
        <TogglePreviewButton className="inline-block @sm:hidden" />
      </div>

      <div
        className={clsx(
          "justify-between p-4",
          markdownPreviewOpened ? "col-span-2 flex" : "hidden @sm:flex",
        )}
      >
        <span> Preview </span>

        <TogglePreviewButton />
      </div>
    </header>
  );
}
