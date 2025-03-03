import DocumentPanel from "@/app/components/DocumentPanel";
import MarkdownEditor from "@/app/components/MarkdownEditor";

export default function Page() {
  return (
    <main className="grid grid-cols-(--editor-main-cols)">
      <DocumentPanel />
      <MarkdownEditor />
    </main>
  );
}
