"use client";

import Image from "next/image";
import { Field, Input, Label } from "@headlessui/react";
import iconDocument from "@/public/assets/icon-document.svg";
import { useEffect, useState } from "react";
import { memo } from "react";
import { currentUserDocumentAtom, userDocumentsAtom } from "@/app/lib/atoms";
import { useAtom } from "jotai";
import { saveDocumentName } from "@/app/editor/action";
import { TDocument } from "@/app/lib/definitions/schemas";

type TDocumentRenamerProps = {
  topText: string;
  renamedDocumentId: string;
  currentDocumentName?: string;
  save?: boolean;
};

export default function DocumentRenamer({
  topText,
  renamedDocumentId,
  currentDocumentName = "",
  save = false,
}: TDocumentRenamerProps) {
  const [currentUserDocument, setCurrentDocument] = useAtom(
    currentUserDocumentAtom,
  );
  const [userDocuments, setUserDocuments] = useAtom(userDocumentsAtom);
  const [documentName, setDocumentName] = useState(
    currentUserDocument.documentName,
  );

  const addFileExtention = (value: string) => {
    if (value === "") {
      return "untitled-document.md";
    } else if (!value.endsWith(".md")) {
      return documentName + ".md";
    } else {
      return documentName;
    }
  };

  const handleRenamerBlur = async () => {
    const formattedDocumentName = addFileExtention(documentName);

    setDocumentName(formattedDocumentName);
    if (renamedDocumentId === currentUserDocument.id) {
      setCurrentDocument({
        ...currentUserDocument,
        documentName: formattedDocumentName,
      });
    }

    if (save) {
      try {
        // update document list in the database
        await saveDocumentName(renamedDocumentId, formattedDocumentName);

        // update local document list
        const updatedDocumentList = userDocuments.map((document: TDocument) => {
          if (document.id === renamedDocumentId) {
            document.document_name = formattedDocumentName;
            return document;
          }
          return document;
        });

        setUserDocuments(updatedDocumentList);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (currentDocumentName) {
      setDocumentName(currentDocumentName);
    }
  }, [currentDocumentName]);

  return (
    <form
      className="flex items-center gap-4 text-neutral-100"
      onSubmit={(e) => e.preventDefault()}
    >
      <Image src={iconDocument} alt="document" />

      <Field className="grid">
        <Label className="mobile:inline-block hidden text-sm font-light text-neutral-300">
          {topText}
        </Label>
        <Input
          className="border-b-2 border-transparent pb-1 caret-orange-200 focus:border-neutral-100 focus:border-b-neutral-100 focus:outline-0"
          value={documentName}
          onBlur={handleRenamerBlur}
          onChange={(e) => setDocumentName(e.currentTarget.value)}
        />
      </Field>
    </form>
  );
}

export const MemoizedDocumentRenamer = memo(DocumentRenamer);
