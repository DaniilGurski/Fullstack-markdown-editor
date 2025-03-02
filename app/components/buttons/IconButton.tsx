import clsx from "clsx";
import React from "react";

type TIconButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  className?: string;
  srOnlyLabel: string;
};

export default function IconButton({
  children,
  className,
  srOnlyLabel,
  ...rest
}: TIconButtonProps) {
  return (
    <button className={clsx("cursor-pointer", className)} {...rest}>
      {children}
      <span className="sr-only"> {srOnlyLabel} </span>
    </button>
  );
}
