"use client";

import { useAtom, useAtomValue } from "jotai";
import {
  documentPanelOpenedAtom,
  markdownPreviewOpenedAtom,
} from "@/app/lib/atoms";
import clsx from "clsx";
import Image from "next/image";
import { Textarea } from "@headlessui/react";
import PanelButton from "@/app/components/PanelButton";
import DocumentRenamer from "@/app/components/DocumentRenamer";
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
  return (
    <article className={clsx(!documentPanelOpened && "col-span-2")}>
      <PrimaryHeader />
      <div>
        <EditorHeader />
        <div className="divide-editor-divider mobile:grid-cols-2 grid h-dvh grid-cols-1 divide-x-2">
          <MarkdownTextArea />
          <MarkdownPreview />
        </div>
      </div>
    </article>
  );
}

function PrimaryHeader() {
  return (
    <header className="flex items-center justify-between bg-neutral-800">
      <div className="flex gap-6">
        <PanelButton />

        <Image
          className="tablet:inline-block hidden self-center"
          src={logo}
          alt="logo"
        />

        {/* divider */}
        <div
          className="tablet:block my-3 hidden bg-neutral-600 px-[1px]"
          aria-hidden="true"
        ></div>

        <DocumentRenamer topText="Document Name" />
      </div>

      <div className="tablet:pr-4 flex gap-6 pr-2">
        <IconButton srOnlyLabel="Delete document">
          <Image src={iconDelete} alt="" />
        </IconButton>

        <Button className="flex items-center gap-2 p-3">
          <Image src={iconSave} alt="" aria-hidden="true" />
          <span className="mobile:not-sr-only sr-only"> Save Changes </span>
        </Button>
      </div>
    </header>
  );
}

function EditorHeader() {
  const markdownPreviewOpened = useAtomValue(markdownPreviewOpenedAtom);
  return (
    <header className="bg-editor-header text-editor-header-text grid grid-cols-(--editor-header-cols) divide-x-2 divide-neutral-300 font-medium">
      <div
        className={clsx(
          "justify-between p-4",
          !markdownPreviewOpened ? "flex" : "hidden",
        )}
      >
        <span> Markdown </span>
        <ToggleMarkdownPreviewButton className="mobile:hidden inline-block" />
      </div>

      <div
        className={clsx(
          "justify-between p-4",
          markdownPreviewOpened ? "flex" : "mobile:flex hidden",
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

function MarkdownTextArea() {
  const markdownPreviewOpened = useAtomValue(markdownPreviewOpenedAtom);
  return (
    <Textarea
      className={clsx(
        `${robotoMono.className} mobile:py-2 peer bg-neutral-100 p-4 text-sm text-neutral-700 focus:outline-none data-[hidden=true]:hidden`,
      )}
      data-hidden={markdownPreviewOpened ? "true" : "false"}
    />
  );
}

function MarkdownPreview() {
  return (
    <div className="mobile:py-2 :bg-red-200 w-full bg-white p-4 peer-[[data-hidden=true]]:col-span-2 peer-[[data-hidden=true]]:mx-auto peer-[[data-hidden=true]]:max-w-2xl">
      <p> </p>
    </div>
  );
}
