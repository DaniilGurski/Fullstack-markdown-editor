"use client";

import { useAtomValue } from "jotai";
import { userDocumentsAtom } from "@/app/lib/atoms";
import { memo } from "react";
import DocumentItem from "@/app/components/editor/panel/DocumentItem";
import { format } from "date-fns";

export function DocumentList() {
  const userDocuments = useAtomValue(userDocumentsAtom);
  return (
    <ul className="grid gap-y-7">
      {userDocuments.map((document) => {
        const { updated_at, document_name, id } = document;
        const formattedUpdateDate = format(new Date(updated_at), "dd MMMM y");

        return (
          <DocumentItem
            lastUpdated={formattedUpdateDate}
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
