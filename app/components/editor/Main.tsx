"use client";

import React, { useEffect } from "react";
import { useSetAtom } from "jotai";
import { userDocumentsAtom } from "@/app/lib/atoms";
import { createClient } from "@/app/utils/supabase/client";

type TMainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: TMainProps) {
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
        throw new Error(error.message);
      }

      setUserDocuments(documents);
    };

    getUserDocuments();
  }, [auth, setUserDocuments, supabase]);

  // handle prefers color scheme: dark / light
  // useEffect(() => {
  //   const mediaWatcher = window.matchMedia("(prefers-color-scheme: dark)");
  //   setDarkThemeOn(mediaWatcher.matches);

  //   const updatePrefersDarkTheme = (e: MediaQueryListEvent) => {
  //     setDarkThemeOn(e.matches);
  //   };

  //   mediaWatcher.addEventListener("change", updatePrefersDarkTheme);

  //   return () => {
  //     mediaWatcher.removeEventListener("change", updatePrefersDarkTheme);
  //   };
  // });

  return (
    <main className="theme-dark:bg-neutral-1000 grid grid-cols-(--editor-main-cols) bg-neutral-100">
      {children}
    </main>
  );
}
