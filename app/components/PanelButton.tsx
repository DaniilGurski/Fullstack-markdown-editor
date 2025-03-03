import Image from "next/image";
import IconButton from "./buttons/IconButton";
import iconMenu from "@/public/assets/icon-menu.svg";
import iconClose from "@/public/assets/icon-close.svg";
import { useAtom } from "jotai";
import { documentPanelOpenedAtom } from "@/app/lib/atoms";

export default function PanelButton() {
  const [documentPanelOpened, setDocumentPanelOpened] = useAtom(
    documentPanelOpenedAtom,
  );

  return (
    <IconButton
      className="mobile:size-20 grid size-16 place-content-center bg-neutral-700 hover:bg-orange-200 focus:bg-orange-200"
      srOnlyLabel="Toggle document panel"
      aria-expanded={documentPanelOpened}
      aria-controls="document-panel"
      onClick={() => setDocumentPanelOpened((prev) => !prev)}
    >
      <Image src={documentPanelOpened ? iconClose : iconMenu} alt="" />
    </IconButton>
  );
}
