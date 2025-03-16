type TBlockquoteProps = {
  children: React.ReactNode;
};

export default function Blockquote({ children }: TBlockquoteProps) {
  return (
    <blockquote className="theme-dark:bg-neutral-800 theme-dark:text-neutral-100 rounded-sm border-l-4 border-l-orange-200 bg-neutral-200 p-6 font-bold text-neutral-700">
      {children}
    </blockquote>
  );
}
