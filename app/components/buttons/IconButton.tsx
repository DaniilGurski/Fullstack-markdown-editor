import React from "react";

type TIconButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  srOnlyLabel: string;
};

export default function IconButton({
  children,
  srOnlyLabel,
  ...rest
}: TIconButtonProps) {
  return (
    <button {...rest}>
      {children}
      <span className="sr-only"> {srOnlyLabel} </span>
    </button>
  );
}
