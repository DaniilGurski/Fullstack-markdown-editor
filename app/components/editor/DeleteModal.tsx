"use client";

import { deleteDocument } from "@/app/editor/action";
import ConfirmModal from "../ConfirmModal";
import {
  currentUserDocumentAtom,
  currentUserDocumentDefault,
  deleteModalOpenedAtom,
  userDocumentsAtom,
} from "@/app/lib/atoms";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { isUserDocument } from "@/app/lib/typeguards";
import { tryCatch } from "@/app/utils/helpers";

export default function DeleteModal() {
  const [currentUserDocument, setCurrentUserDocument] = useAtom(
    currentUserDocumentAtom,
  );
  const setUserDocuments = useSetAtom(userDocumentsAtom);
  const [deleteModalOpened, setDeleteModalOpened] = useAtom(
    deleteModalOpenedAtom,
  );
  const deleteModalRef = useRef<HTMLDialogElement | null>(null);

  const createNewDocument = () => {
    setCurrentUserDocument(currentUserDocumentDefault);
    setDeleteModalOpened(false);
  };

  const handleConfirmClick = async () => {
    if (!currentUserDocument.id) {
      createNewDocument();
      return;
    }

    tryCatch(async () => {
      const data = await deleteDocument(currentUserDocument.id);
      if (isUserDocument(data)) {
        setUserDocuments((prev) =>
          prev.filter((document) => document.id !== data.id),
        );
        createNewDocument();
      }
    });
  };

  useEffect(() => {
    if (deleteModalOpened && deleteModalRef.current) {
      deleteModalRef.current.showModal();
    } else {
      deleteModalRef.current?.close();
    }
  }, [deleteModalOpened]);

  return (
    <ConfirmModal
      ref={deleteModalRef}
      title="Delete this document ?"
      body={`Are you sure you want to delete the '${currentUserDocument.documentName}' document and its contents? This action cannot be reversed.`}
      confirmButtonText="Confirm & Delete"
      onConfirm={handleConfirmClick}
      onCancel={() => setDeleteModalOpened(false)}
    />
  );
}
