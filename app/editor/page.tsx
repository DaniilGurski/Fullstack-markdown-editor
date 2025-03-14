"use client";

import DocumentPanel from "@/app/components/editor/panel/DocumentPanel";
import MarkdownEditor from "@/app/components/editor/MarkdownEditor";
import { createClient } from "@/app/utils/supabase/client";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { darkThemeOnAtom, userDocumentsAtom } from "@/app/lib/atoms";
import DeleteModal from "@/app/components/editor/DeleteModal";

export default function Page() {
  const setUserDocuments = useSetAtom(userDocumentsAtom);
  const supabase = createClient();
  const { auth } = supabase;

  const setDarkThemeOn = useSetAtom(darkThemeOnAtom);

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

  // handle prefers color scheme: dark / light
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkThemeOn(mediaWatcher.matches);

    const updatePrefersDarkTheme = (e: MediaQueryListEvent) => {
      setDarkThemeOn(e.matches);
    };

    mediaWatcher.addEventListener("change", updatePrefersDarkTheme);

    return () => {
      mediaWatcher.removeEventListener("change", updatePrefersDarkTheme);
    };
  });

  return (
    <main className="grid grid-cols-(--editor-main-cols)">
      <DocumentPanel />
      <MarkdownEditor />
      <DeleteModal />
    </main>
  );
}
