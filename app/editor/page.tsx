import Main from "@/app/components/editor/Main";
import DocumentPanel from "@/app/components/editor/panel/DocumentPanel";
import MarkdownEditor from "@/app/components/editor/MarkdownEditor";
import DeleteModal from "@/app/components/editor/DeleteModal";
// import faviconDark from "@/public/assets/favicon-dark.png";
// import faviconLight from "@/public/assets/favicon-light.png";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Editor",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/assets/favicon-dark.png",
      href: "/assets/favicon-dark.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/assets/favicon-light.png",
      href: "/assets/favicon-light.png",
    },
  ],
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
