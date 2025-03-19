"use client";

import { useAtom } from "jotai";
import { currentUserDocumentAtom } from "@/app/lib/atoms";
import { userDocumentsAtom } from "@/app/lib/atoms";
import { TDocument } from "@/app/lib/definitions/schemas";
import { createClient } from "@/app/utils/supabase/client";
import { saveDocument } from "@/app/editor/action";
import iconSave from "@/public/assets/icon-save.svg";
import Image from "next/image";
import Button from "@/app/components/buttons/Button";

export default function SaveChangesButton() {
  const [currentDocument, setCurrentDocument] = useAtom(
    currentUserDocumentAtom,
  );
  const [userDocuments, setUserDocuments] = useAtom(userDocumentsAtom);

  const updateDocuments = (savedDocument: TDocument) => {
    setCurrentDocument({
      id: savedDocument.id,
      documentName: savedDocument.document_name,
      content: savedDocument.content,
    });

    // add new document / update existing document in the documents list
    const index = userDocuments.findIndex((e) => e.id === savedDocument.id);
    const updatedUserDocuments = userDocuments;

    if (index > -1) {
      updatedUserDocuments[index] = savedDocument;
    } else {
      updatedUserDocuments.push(savedDocument);
    }

    setUserDocuments([...updatedUserDocuments]);
  };

  const handleOnClick = async () => {
    const supabase = await createClient();

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return;
      }

      const savedDocument = await saveDocument(currentDocument, user.id);

      if (savedDocument) {
        updateDocuments(savedDocument);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        handleOnClick();
      }}
    >
      <Button className="flex items-center gap-2 p-3">
        <Image src={iconSave} alt="" aria-hidden="true" />
        <span className="sr-only @sm:not-sr-only"> Save Changes </span>
      </Button>
    </form>
  );
}
