"use client";

import clsx from "clsx";
import { useAtomValue } from "jotai";
import Button from "@/app/components/buttons/Button";
import DocumentRenamer from "@/app/components/DocumentRenamer";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import { documentPanelOpenedAtom } from "@/app/lib/atoms";

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

          <DocumentList />
        </div>
      </div>

      <ThemeSwitch />
    </div>
  );
}

function DocumentList() {
  return (
    <ul className="grid gap-y-7">
      <DocumentItem lastUpdated="01 April 2022" name="" />
      <DocumentItem lastUpdated="01 April 2022" name="" />
      <DocumentItem lastUpdated="01 April 2022" name="" />
    </ul>
  );
}

function DocumentItem({
  lastUpdated,
  name,
}: {
  lastUpdated: string;
  name: string;
}) {
  return (
    <li>
      <DocumentRenamer topText={lastUpdated} currentDocumentName={name} />
    </li>
  );
}
