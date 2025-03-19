"use client";

import { currentUserDocumentAtom, userDocumentsAtom } from "@/app/lib/atoms";
import { useSetAtom } from "jotai";
import { useAtomValue } from "jotai";

import iconDocument from "@/public/assets/icon-document.svg";
import Image from "next/image";

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
    <li
      className="group flex cursor-pointer items-center gap-x-4"
      onClick={handleOnClick}
    >
      <Image src={iconDocument} alt="document" />

      <div className="grid w-full">
        <span className="text-sm font-light text-neutral-300">
          {lastUpdated}
        </span>
        <button className="cursor-pointer text-start text-neutral-100 group-hover:text-orange-200 group-focus:text-orange-200">
          {name}
        </button>
      </div>
    </li>
  );
}
