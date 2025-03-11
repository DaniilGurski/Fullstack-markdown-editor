"use client";

import DocumentPanel from "@/app/components/editor/panel/DocumentPanel";
import MarkdownEditor from "@/app/components/editor/MarkdownEditor";
import { createClient } from "@/app/utils/supabase/client";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import { userDocumentsAtom } from "@/app/lib/atoms";
import DeleteModal from "@/app/components/editor/DeleteModal";

export default function Page() {
  const setUserDocuments = useSetAtom(userDocumentsAtom);
  const userDocuments = useAtomValue(userDocumentsAtom);
  const supabase = createClient();
  const { auth } = supabase;

  // TODO: use react query instead ?
  useEffect(() => {
    const getUserDocuments = async () => {
      const {
        data: { user },
      } = await auth.getUser();

      // TODO: add typization
      const { data: documents, error } = await supabase
        .from("documents")
        .select("*")
        .eq("user_id", user?.id);

      if (error) {
        throw new Error(error.message);
      }

      setUserDocuments(documents);
    };

    getUserDocuments();
  }, [auth, setUserDocuments, supabase]);

  useEffect(() => {}, [userDocuments]);

  return (
    <main className="grid grid-cols-(--editor-main-cols)">
      <DocumentPanel />
      <MarkdownEditor />
      <DeleteModal />
    </main>
  );
}
