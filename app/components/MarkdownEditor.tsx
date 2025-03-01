import Image from "next/image";
import PanelButton from "@/app/components/PanelButton";
import DocumentRenamer from "@/app/components/DocumentRenamer";
import Button from "@/app/components/buttons/Button";
import IconButton from "@/app/components/buttons/IconButton";
import logo from "@/public/assets/logo.svg";
import iconDelete from "@/public/assets/icon-delete.svg";
import iconSave from "@/public/assets/icon-save.svg";

export default function MarkdownEditor() {
  return (
    <article>
      <header className="flex items-center justify-between bg-neutral-800">
        <div className="flex gap-6">
          <PanelButton />

          <Image
            className="tablet:inline-block hidden self-center"
            src={logo}
            alt="logo"
          />

          {/* divider */}
          <div
            className="tablet:block my-3 hidden bg-neutral-600 px-[1px]"
            aria-hidden="true"
          ></div>

          <DocumentRenamer />
        </div>

        <div className="tablet:pr-4 flex gap-6 pr-2">
          <IconButton srOnlyLabel="Delete document">
            <Image src={iconDelete} alt="" />
          </IconButton>

          <Button className="flex items-center gap-2 p-3">
            <Image src={iconSave} alt="" aria-hidden="true" />
            <span className="mobile:not-sr-only sr-only"> Save Changes </span>
          </Button>
        </div>
      </header>
      <div></div>
    </article>
  );
}
