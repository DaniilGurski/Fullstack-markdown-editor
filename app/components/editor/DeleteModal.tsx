import ConfirmModal from "../ConfirmModal";
import {
  currentUserDocumentAtom,
  deleteModalOpenedAtom,
} from "@/app/lib/atoms";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef } from "react";

export default function DeleteModal() {
  const currentUserDocument = useAtomValue(currentUserDocumentAtom);
  const [deleteModalOpened, setDeleteModalOpened] = useAtom(
    deleteModalOpenedAtom,
  );
  const deleteModalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (deleteModalOpened && deleteModalRef.current) {
      console.log(deleteModalRef.current);
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
      onConfirm={() => {
        console.log("deleting document...");
      }}
      onCancel={() => setDeleteModalOpened(false)}
    />
  );
}
