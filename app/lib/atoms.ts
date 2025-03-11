import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { DocumentSchema } from "@/app/lib/schemas/document";
import { TCurrentUserDocument } from "@/app/lib/definitions/states";
import { z } from "zod";

export const markdownPreviewOpenedAtom = atom(false);
export const darkModeOnAtom = atomWithStorage("markdownDarkMode", false);
export const documentPanelOpenedAtom = atom(false);

// An array of documents
export const userDocumentsAtom = atom<z.infer<typeof DocumentSchema>[]>([]);
export const currentUserDocumentAtom = atom<TCurrentUserDocument>({
  documentName: "untitled-document.md",
  content: "",
  id: "",
});

// I'm using an atom for this modal to make it easier to pass a ref to the modal, since it's at the component level of the page while the delete document butotn is deeper in the component tree.
export const deleteModalOpenedAtom = atom(false);
