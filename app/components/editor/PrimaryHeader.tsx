"use client";

import { useAtomValue, useSetAtom } from "jotai";
import {
  currentUserDocumentAtom,
  deleteModalOpenedAtom,
} from "@/app/lib/atoms";
import logo from "@/public/assets/logo.svg";
import iconDelete from "@/public/assets/icon-delete.svg";
import Image from "next/image";
import PanelButton from "@/app/components/PanelButton";
import { MemoizedDocumentRenamer } from "@/app/components/DocumentRenamer";
import IconButton from "@/app/components/buttons/IconButton";
import SaveChangesButton from "@/app/components/editor/SaveChangesButton";

export default function PrimaryHeader() {
  const currentDocument = useAtomValue(currentUserDocumentAtom);
  const setDeleteModalOpened = useSetAtom(deleteModalOpenedAtom);

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
        <IconButton
          srOnlyLabel="Delete document"
          onClick={() => setDeleteModalOpened(true)}
        >
          <Image src={iconDelete} alt="" />
        </IconButton>

        <SaveChangesButton />
      </div>
    </header>
  );
}
