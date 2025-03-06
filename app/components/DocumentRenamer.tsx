"use client";

import Image from "next/image";
import { Field, Input, Label } from "@headlessui/react";
import iconDocument from "@/public/assets/icon-document.svg";
import { useEffect, useState } from "react";
import { memo } from "react";

type TDocumentRenamerProps = {
  topText: string;
  currentDocumentName?: string;
};

export default function DocumentRenamer({
  topText,
  currentDocumentName = "",
}: TDocumentRenamerProps) {
  // TODO: Add debounce ?
  const [documentName, setDocumentName] = useState(currentDocumentName);

  const addFileExtention = (value: string) => {
    if (value === "") {
      setDocumentName("untitled-document.md");
    } else if (!value.endsWith(".md")) {
      setDocumentName(documentName + ".md");
    }
  };

  // TODO: Is this neccessary ? (I mean what if the document name on upload has .md ?)
  useEffect(() => {
    addFileExtention(documentName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentDocumentName) {
      setDocumentName(currentDocumentName);
    }
  }, [currentDocumentName]);

  return (
    <form className="flex items-center gap-4 text-neutral-100">
      <Image className="" src={iconDocument} alt="document" />

      <Field className="grid">
        <Label className="mobile:inline-block hidden text-sm font-light text-neutral-300">
          {topText}
        </Label>
        <Input
          className="border-b-2 border-transparent pb-1 caret-orange-200 focus:border-neutral-100 focus:border-b-neutral-100 focus:outline-0"
          value={documentName}
          onBlur={(e) => addFileExtention(e.currentTarget.value)}
          onChange={(e) => setDocumentName(e.currentTarget.value)}
        />
      </Field>
    </form>
  );
}

export const MemoizedDocumentRenamer = memo(DocumentRenamer);
