"use client";

import { useAtomValue, useAtom } from "jotai";
import {
  markdownPreviewOpenedAtom,
  currentUserDocumentAtom,
} from "@/app/lib/atoms";

import { robotoMono } from "@/app/fonts";
import { Textarea } from "@headlessui/react";
import clsx from "clsx";

export default function MarkdownTextArea() {
  const markdownPreviewOpened = useAtomValue(markdownPreviewOpenedAtom);

  // FIXME: Remove unnecessary rerenders (the component will be rerendered if we change other parts of the document state)
  const [currentUserDocument, setCurrentUserDocument] = useAtom(
    currentUserDocumentAtom,
  );

  return (
    <Textarea
      className={clsx(
        `${robotoMono.className} peer theme-dark:bg-neutral-1000 theme-dark:text-neutral-400 bg-neutral-100 p-4 text-sm text-neutral-700 focus:outline-none data-[hidden=true]:hidden @sm:py-2`,
      )}
      data-hidden={markdownPreviewOpened ? "true" : "false"}
      onChange={(e) =>
        setCurrentUserDocument({
          ...currentUserDocument,
          content: e.target.value,
        })
      }
      value={currentUserDocument.content}
    />
  );
}
