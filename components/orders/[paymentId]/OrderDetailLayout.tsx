type OrderDetailLayoutProps = {
  title: string;
  children: React.ReactNode;
};
export default function OrderDetailLayout({ title, children }: OrderDetailLayoutProps) {
  return (
    <section className="pt-7 mb-2 ">
      <h2 className="pb-3 border-b-[1px] border-b-main font-medium">{title}</h2>
      {children}
    </section>
  );
}
