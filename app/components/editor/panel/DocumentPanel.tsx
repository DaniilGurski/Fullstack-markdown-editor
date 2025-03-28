"use client";

import { useAtomValue, useSetAtom } from "jotai";
import {
  currentUserDocumentAtom,
  currentUserDocumentDefault,
  documentPanelOpenedAtom,
} from "@/app/lib/atoms";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { MemoizedDocumentList } from "@/app/components/editor/panel/DocumentList";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import Button from "@/app/components/buttons/Button";
import clsx from "clsx";
import { signOut } from "@/app/editor/action";
import { tryCatch } from "@/app/utils/helpers";
import { useRouter } from "next/navigation";

// TODO: add overflow scroll when there are too many documents
export default function DocumentPanel() {
  const documentPanelOpened = useAtomValue(documentPanelOpenedAtom);
  const setCurrentUserDocument = useSetAtom(currentUserDocumentAtom);
  const router = useRouter();

  const handleCreateNewDocument = () => {
    setCurrentUserDocument(currentUserDocumentDefault);
  };

  const handleLogOutButton = () => {
    tryCatch(async () => {
      await signOut();
      router.replace("/login");
    });
  };

  return (
    <div
      className={clsx(
        "content-between bg-neutral-900 p-6 text-neutral-500",
        documentPanelOpened ? "grid" : "hidden",
      )}
      id="document-panel"
    >
      <div className="grid gap-y-7">
        <Image
          className="hide-panel-logo:hidden inline-block"
          src={logo}
          alt="logo"
        />

        <h2 className="text-sm font-medium uppercase"> My documents </h2>

        <div className="grid gap-y-6">
          <Button onClick={handleCreateNewDocument}> + New Document </Button>

          <MemoizedDocumentList />
        </div>
      </div>

      <div className="grid gap-y-4">
        <ThemeSwitch />

        <Button onClick={handleLogOutButton}> Sign out </Button>
      </div>
    </div>
  );
}
