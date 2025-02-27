type TButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
};

export default function Button({ children, ...rest }: TButtonProps) {
  return (
    <button
      className="cursor-pointer rounded-sm bg-orange-200 p-3 text-neutral-100 hover:bg-orange-100 focus:bg-orange-100"
      {...rest}
    >
      {children}
    </button>
  );
}
