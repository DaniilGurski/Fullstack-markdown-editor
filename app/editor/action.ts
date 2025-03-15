"use server";
import { createClient } from "@/app/utils/supabase/server";
import { TCurrentUserDocument } from "@/app/lib/definitions/states";
import { TDocument } from "@/app/lib/definitions/schemas";

type TDocumentUpsertObject = {
  user_id: string;
  document_name: string;
  content: string;
  id?: string;
};

export async function saveDocument(
  currentDocumentState: TCurrentUserDocument,
  userId: string,
): Promise<TDocument> {
  const supabase = await createClient();

  const upsertObject: TDocumentUpsertObject = {
    user_id: userId,
    document_name: currentDocumentState.documentName,
    content: currentDocumentState.content,
  };

  if (currentDocumentState.id) {
    upsertObject["id"] = currentDocumentState.id;
  }

  const { data: document, error } = await supabase
    .from("documents")
    .upsert(upsertObject)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return document[0];
}

export async function deleteDocument(documentId: string): Promise<TDocument[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("documents")
    .delete()
    .eq("id", documentId)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
}

export async function saveDocumentName(documentId: string, newName: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("documents")
    .update({ document_name: newName })
    .eq("id", documentId)
    .select();

  if (error) {
    throw new Error(error.message);
  }
}
