"use client";

import { useAtomValue, useAtom } from "jotai";
import {
  markdownPreviewOpenedAtom,
  currentUserDocumentAtom,
} from "@/app/lib/atoms";
import { useEffect } from "react";
import { robotoMono } from "@/app/fonts";
import { Textarea } from "@headlessui/react";
import clsx from "clsx";

export default function MarkdownTextArea({
  currentContent = "",
}: {
  currentContent?: string;
}) {
  const markdownPreviewOpened = useAtomValue(markdownPreviewOpenedAtom);

  // FIXME: Remove unnecessary rerenders (the component will be rerendered if we change other parts of the document state)
  const [currentDocument, setCurrentDocument] = useAtom(
    currentUserDocumentAtom,
  );

  useEffect(() => {
    if (currentContent) {
      setCurrentDocument({
        ...currentDocument,
        content: currentContent,
      });
    }
  }, [currentDocument, currentContent, setCurrentDocument]);

  return (
    <Textarea
      className={clsx(
        `${robotoMono.className} peer bg-neutral-100 p-4 text-sm text-neutral-700 focus:outline-none data-[hidden=true]:hidden @sm:py-2`,
      )}
      data-hidden={markdownPreviewOpened ? "true" : "false"}
      onChange={(e) =>
        setCurrentDocument({ ...currentDocument, content: e.target.value })
      }
      value={currentDocument.content}
    />
  );
}
