import TogglePreviewButton from "@/app/components/editor/TogglePreviewButton";
import { useAtomValue } from "jotai";
import { markdownPreviewOpenedAtom } from "@/app/lib/atoms";
import clsx from "clsx";

export default function EditorHeader() {
  const markdownPreviewOpened = useAtomValue(markdownPreviewOpenedAtom);

  return (
    <header className="bg-editor-header text-editor-header-text grid grid-cols-1 divide-x-2 divide-neutral-300 font-medium @sm:grid-cols-2">
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
