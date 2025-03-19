"use client";

import Image from "next/image";
import { Field, Input, Label } from "@headlessui/react";
import iconDocument from "@/public/assets/icon-document.svg";
import { useEffect, useState } from "react";
import { memo } from "react";
import { currentUserDocumentAtom } from "@/app/lib/atoms";
import { useAtom } from "jotai";

type TDocumentRenamerProps = {
  topText: string;
  currentDocumentName?: string;
};

export default function DocumentRenamer({
  topText,
  currentDocumentName = "",
}: TDocumentRenamerProps) {
  const [currentUserDocument, setCurrentDocument] = useAtom(
    currentUserDocumentAtom,
  );
  const [documentName, setDocumentName] = useState(
    currentUserDocument.documentName,
  );

  const formatFileName = (value: string) => {
    value = value.split(" ").join("-");

    if (value === "") {
      return "untitled-document.md";
    } else if (!value.endsWith(".md")) {
      return value + ".md";
    } else {
      return value;
    }
  };

  const handleRenamerBlur = async () => {
    const formattedDocumentName = formatFileName(documentName);

    setDocumentName(formattedDocumentName);
    setCurrentDocument({
      ...currentUserDocument,
      documentName: formattedDocumentName,
    });
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
          className="border-b-2 border-transparent pb-1 text-ellipsis caret-orange-200 focus:border-neutral-100 focus:border-b-neutral-100 focus:outline-0"
          value={documentName}
          onBlur={handleRenamerBlur}
          onChange={(e) => setDocumentName(e.currentTarget.value)}
        />
      </Field>
    </form>
  );
}

export const MemoizedDocumentRenamer = memo(DocumentRenamer);
