"use client";

import { useAtomValue } from "jotai";
import { documentPanelOpenedAtom } from "@/app/lib/atoms";
import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { MemoizedDocumentList } from "@/app/components/editor/panel/DocumentList";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import Button from "@/app/components/buttons/Button";
import clsx from "clsx";

export default function DocumentPanel() {
  const documentPanelOpened = useAtomValue(documentPanelOpenedAtom);

  return (
    <div
      className={clsx(
        "content-between bg-neutral-900 p-6 text-neutral-500",
        documentPanelOpened ? "grid" : "hidden",
      )}
      id="document-panel"
    >
      <div className="grid gap-y-7">
        <Image className="tablet:hidden inline-block" src={logo} alt="logo" />

        <h2 className="text-sm font-medium uppercase"> My documents </h2>

        <div className="grid gap-y-6">
          <Button> + New Document </Button>

          <MemoizedDocumentList />
        </div>
      </div>

      <ThemeSwitch />
    </div>
  );
}
