import Image from "next/image";
import iconMenu from "@/public/assets/icon-menu.svg";
import IconButton from "./buttons/IconButton";

export default function PanelButton() {
  return (
    <IconButton
      className="mobile:size-24 grid size-16 place-content-center bg-neutral-700 hover:bg-orange-200 focus:bg-orange-200"
      srOnlyLabel="Toggle document panel"
      aria-expanded="false"
    >
      <Image src={iconMenu} alt="" />
    </IconButton>
  );
}
