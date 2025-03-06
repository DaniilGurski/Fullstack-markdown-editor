"use client";

import DocumentPanel from "@/app/components/DocumentPanel";
import MarkdownEditor from "@/app/components/MarkdownEditor";
import { createClient } from "@/app/utils/supabase/client";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { userDocumentsAtom } from "@/app/lib/atoms";

export default function Page() {
  const setUserDocuments = useSetAtom(userDocumentsAtom);
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
        console.log("error accured when selecting user documents");
        throw new Error(error.message);
      }

      setUserDocuments(documents);
    };

    getUserDocuments();
  }, [auth, setUserDocuments, supabase]);

  return (
    <main className="grid grid-cols-(--editor-main-cols)">
      <DocumentPanel />
      <MarkdownEditor />
    </main>
  );
}
