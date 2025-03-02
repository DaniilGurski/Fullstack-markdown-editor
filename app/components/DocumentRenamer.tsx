"use client";

import Image from "next/image";
import { Field, Input, Label } from "@headlessui/react";
import iconDocument from "@/public/assets/icon-document.svg";
import { useState } from "react";

export default function DocumentRenamer() {
  // TODO: Should this state be global ?
  // TODO: Add debounce ?
  const [documentName, setDocumentName] = useState("");

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === "") {
      setDocumentName("untitled.md");
    } else if (!event.currentTarget.value.endsWith(".md")) {
      setDocumentName(documentName + ".md");
    }
  };

  return (
    <form className="flex items-center gap-4 text-neutral-100">
      <Image className="" src={iconDocument} alt="document" />

      <Field className="grid">
        <Label className="mobile:inline-block hidden text-sm font-light text-neutral-300">
          Document Name
        </Label>
        <Input
          className="border-b-2 border-transparent pb-1 caret-orange-200 focus:border-neutral-100 focus:border-b-neutral-100 focus:outline-0"
          value={documentName}
          onBlur={handleOnBlur}
          onChange={(e) => setDocumentName(e.currentTarget.value)}
        />
      </Field>
    </form>
  );
}
