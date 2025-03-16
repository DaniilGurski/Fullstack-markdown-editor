type TListProps = {
  children: React.ReactNode;
};
export default function List({ children }: TListProps) {
  return (
    <ul className="grid list-disc gap-y-2 pl-8 marker:text-orange-200">
      {children}
    </ul>
  );
}
