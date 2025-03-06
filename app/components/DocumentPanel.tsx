"use client";

import clsx from "clsx";
import { memo } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import Button from "@/app/components/buttons/Button";
import { MemoizedDocumentRenamer } from "@/app/components/DocumentRenamer";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import {
  currentUserDocumentAtom,
  documentPanelOpenedAtom,
  userDocumentsAtom,
} from "@/app/lib/atoms";

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

function DocumentList() {
  const userDocuments = useAtomValue(userDocumentsAtom);
  return (
    <ul className="grid gap-y-7">
      {userDocuments.map((document) => {
        const { updated_at, document_name, id } = document;
        return (
          <DocumentItem
            lastUpdated={updated_at}
            name={document_name}
            id={id}
            key={id}
          />
        );
      })}
    </ul>
  );
}

const MemoizedDocumentList = memo(DocumentList);

function DocumentItem({
  lastUpdated,
  name,
  id,
}: {
  lastUpdated: string;
  name: string;
  id: string;
}) {
  const setCurrentDocument = useSetAtom(currentUserDocumentAtom);
  const userDocuments = useAtomValue(userDocumentsAtom);

  const handleOnClick = () => {
    const targetDocument = userDocuments.find((document) => document.id === id);

    if (!targetDocument) {
      return;
    }

    setCurrentDocument({
      documentName: name,
      content: targetDocument.content,
      id,
    });
  };

  return (
    <li className="cursor-pointer" onClick={handleOnClick}>
      <MemoizedDocumentRenamer
        topText={lastUpdated}
        currentDocumentName={name}
      />
    </li>
  );
}
