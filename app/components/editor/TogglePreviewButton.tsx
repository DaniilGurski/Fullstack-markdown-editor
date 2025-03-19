"use client";

import clsx from "clsx";
import { markdownPreviewOpenedAtom } from "@/app/lib/atoms";
import { useAtom } from "jotai";
import IconButton from "@/app/components/buttons/IconButton";
import IconShowPreviewSvg from "@/app/components/svg-icons/IconShowPreviewSvg";
import IconHidePreviewSvg from "@/app/components/svg-icons/IconHidePreviewSvg";

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
      className={clsx("group", className)}
      srOnlyLabel={
        markdownPreviewOpened ? "Hide preview window" : "Show preview window"
      }
      onClick={() => {
        setMarkDownPreviewOpened(!markdownPreviewOpened);
      }}
    >
      {markdownPreviewOpened ? <IconHidePreviewSvg /> : <IconShowPreviewSvg />}
    </IconButton>
  );
}
