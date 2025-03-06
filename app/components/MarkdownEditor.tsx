"use client";

import { useState, useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  currentUserDocumentAtom,
  documentPanelOpenedAtom,
  markdownPreviewOpenedAtom,
} from "@/app/lib/atoms";
import clsx from "clsx";
import Image from "next/image";
import { Textarea } from "@headlessui/react";
import PanelButton from "@/app/components/PanelButton";
import { MemoizedDocumentRenamer } from "@/app/components/DocumentRenamer";
import Button from "@/app/components/buttons/Button";
import IconButton from "@/app/components/buttons/IconButton";
import logo from "@/public/assets/logo.svg";
import iconDelete from "@/public/assets/icon-delete.svg";
import iconSave from "@/public/assets/icon-save.svg";
import iconShowPreview from "@/public/assets/icon-show-preview.svg";
import iconHidePreview from "@/public/assets/icon-hide-preview.svg";
import { robotoMono } from "@/app/fonts";

export default function MarkdownEditor() {
  const documentPanelOpened = useAtomValue(documentPanelOpenedAtom);
  const currentDocument = useAtomValue(currentUserDocumentAtom);
  return (
    <article
      className={clsx("min-w-[400px]", !documentPanelOpened && "col-span-2")}
    >
      <PrimaryHeader />
      <div className="@container">
        <EditorHeader />
        <div className="divide-editor-divider @container grid h-dvh grid-cols-1 divide-x-2 @sm:grid-cols-2">
          <MarkdownTextArea currentContent={currentDocument.content} />
          <MarkdownPreview />
        </div>
      </div>
    </article>
  );
}

function PrimaryHeader() {
  const currentDocument = useAtomValue(currentUserDocumentAtom);
  return (
    <header className="@container flex items-center justify-between bg-neutral-800">
      <div className="flex gap-6">
        <PanelButton />

        <Image
          className="hidden self-center @md:inline-block"
          src={logo}
          alt="logo"
        />

        {/* divider */}
        <div
          className="my-3 hidden bg-neutral-600 px-[1px] @md:block"
          aria-hidden="true"
        ></div>

        <MemoizedDocumentRenamer
          topText="Document Name"
          currentDocumentName={currentDocument?.documentName}
        />
      </div>

      <div className="flex gap-6 pr-2 @md:pr-4">
        <IconButton srOnlyLabel="Delete document">
          <Image src={iconDelete} alt="" />
        </IconButton>

        <Button className="flex items-center gap-2 p-3">
          <Image src={iconSave} alt="" aria-hidden="true" />
          <span className="sr-only @sm:not-sr-only"> Save Changes </span>
        </Button>
      </div>
    </header>
  );
}

function EditorHeader() {
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
        <ToggleMarkdownPreviewButton className="inline-block @sm:hidden" />
      </div>

      <div
        className={clsx(
          "justify-between p-4",
          markdownPreviewOpened ? "col-span-2 flex" : "hidden @sm:flex",
        )}
      >
        <span> Preview </span>

        <ToggleMarkdownPreviewButton />
      </div>
    </header>
  );
}

function ToggleMarkdownPreviewButton({ className }: { className?: string }) {
  const [markdownPreviewOpened, setMarkDownPreviewOpened] = useAtom(
    markdownPreviewOpenedAtom,
  );

  return (
    <IconButton
      className={className}
      srOnlyLabel={
        markdownPreviewOpened ? "Hide preview window" : "Show preview window"
      }
      onClick={() => {
        setMarkDownPreviewOpened(!markdownPreviewOpened);
      }}
    >
      <Image
        src={markdownPreviewOpened ? iconHidePreview : iconShowPreview}
        alt=""
      />
    </IconButton>
  );
}

function MarkdownTextArea({
  currentContent = "",
}: {
  currentContent?: string;
}) {
  const markdownPreviewOpened = useAtomValue(markdownPreviewOpenedAtom);
  const [content, setContent] = useState(currentContent);

  useEffect(() => {
    if (currentContent) {
      setContent(currentContent);
    }
  }, [currentContent]);

  return (
    <Textarea
      className={clsx(
        `${robotoMono.className} peer bg-neutral-100 p-4 text-sm text-neutral-700 focus:outline-none data-[hidden=true]:hidden @sm:py-2`,
      )}
      data-hidden={markdownPreviewOpened ? "true" : "false"}
      onChange={(e) => setContent(e.target.value)}
      value={content}
    />
  );
}

function MarkdownPreview() {
  return (
    <div
      className={clsx(
        "w-full bg-neutral-100 p-4 peer-[[data-hidden=false]]:hidden peer-[[data-hidden=true]]:col-span-2 peer-[[data-hidden=true]]:mx-auto peer-[[data-hidden=true]]:max-w-2xl @sm:py-2 @sm:peer-[[data-hidden=false]]:block",
      )}
    >
      <p> Preview </p>
    </div>
  );
}
