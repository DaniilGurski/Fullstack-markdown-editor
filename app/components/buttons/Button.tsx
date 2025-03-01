import clsx from "clsx";

type TButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className, ...rest }: TButtonProps) {
  return (
    <button
      className={clsx(
        "cursor-pointer rounded-sm bg-orange-200 p-3 text-neutral-100 hover:bg-orange-100 focus:bg-orange-100",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
