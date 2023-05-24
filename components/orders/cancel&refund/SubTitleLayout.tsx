type SubTitleLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function SubTitleLayout({ title, children }: SubTitleLayoutProps) {
  return (
    <div>
      <h3 className="pt-[15px] pb-5 text-title-xs font-medium">{title}</h3>
      {children}
    </div>
  );
}
