"use client";

import { markdownPreviewOpenedAtom } from "@/app/lib/atoms";
import { useAtom } from "jotai";
import IconButton from "@/app/components/buttons/IconButton";
import Image from "next/image";
import iconShowPreview from "@/public/assets/icon-show-preview.svg";
import iconHidePreview from "@/public/assets/icon-hide-preview.svg";

export default function TogglePreviewButton({
  className,
}: {
  className?: string;
}) {
  const [markdownPreviewOpened, setMarkDownPreviewOpened] = useAtom(
    markdownPreviewOpenedAtom,
  );

  return (
    <IconButton
      className={className}
      srOnlyLabel={
        markdownPreviewOpened ? "Hide preview window" : "Show preview window"
      }
      onClick={() => {
        setMarkDownPreviewOpened(!markdownPreviewOpened);
      }}
    >
      <Image
        src={markdownPreviewOpened ? iconHidePreview : iconShowPreview}
        alt=""
      />
    </IconButton>
  );
}
