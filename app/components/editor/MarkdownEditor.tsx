"use client";

import { useAtomValue } from "jotai";
import {
  currentUserDocumentAtom,
  documentPanelOpenedAtom,
} from "@/app/lib/atoms";

import PrimaryHeader from "@/app/components/editor/PrimaryHeader";
import EditorHeader from "@/app/components/editor/EditorHeader";
import MarkdownTextArea from "@/app/components/editor/MarkdownTextArea";
import MarkdownPreview from "@/app/components/editor/MarkdownPreview";
import clsx from "clsx";

export default function MarkdownEditor() {
  const documentPanelOpened = useAtomValue(documentPanelOpenedAtom);
  const currentUserDocument = useAtomValue(currentUserDocumentAtom);

  return (
    <article
      className={clsx(
        "min-w-[400px] overflow-y-scroll",
        !documentPanelOpened && "col-span-2",
      )}
    >
      <PrimaryHeader />
      <div className="@container">
        <EditorHeader />
        <div className="theme-dark:divide-neutral-600 @container grid h-dvh grid-cols-1 divide-x-2 divide-neutral-300 @sm:grid-cols-2">
          <MarkdownTextArea />
          <MarkdownPreview>{currentUserDocument.content}</MarkdownPreview>
        </div>
      </div>
    </article>
  );
}
