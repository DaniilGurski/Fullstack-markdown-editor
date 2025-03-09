"use client";

import { useAtomValue } from "jotai";
import { userDocumentsAtom } from "@/app/lib/atoms";
import { memo } from "react";
import DocumentItem from "@/app/components/editor/panel/DocumentItem";

export function DocumentList() {
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

export const MemoizedDocumentList = memo(DocumentList);
