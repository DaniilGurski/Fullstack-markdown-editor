"use client";

import { currentUserDocumentAtom, userDocumentsAtom } from "@/app/lib/atoms";
import { useSetAtom } from "jotai";
import { useAtomValue } from "jotai";
import { MemoizedDocumentRenamer } from "@/app/components/DocumentRenamer";

export default function DocumentItem({
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
        renamedDocumentId={id}
        currentDocumentName={name}
        save
      />
    </li>
  );
}
