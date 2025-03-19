import Main from "@/app/components/editor/Main";
import DocumentPanel from "@/app/components/editor/panel/DocumentPanel";
import MarkdownEditor from "@/app/components/editor/MarkdownEditor";
import DeleteModal from "@/app/components/editor/DeleteModal";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Editor",
};

export default function Page() {
  return (
    <Main>
      <DocumentPanel />
      <MarkdownEditor />
      <DeleteModal />
    </Main>
  );
}
