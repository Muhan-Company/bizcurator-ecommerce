type OrderDetailLayoutProps = {
  title: string;
  children: React.ReactNode;
};
function OrderDetailTextContentLayout({ title, children }: OrderDetailLayoutProps) {
  return (
    <section className="pt-7 mb-2">
      <h2 className="pb-3 border-b-[1px] border-b-main font-medium">{title}</h2>
      <div className="pt-[17px] pb-[6px]">{children}</div>
    </section>
  );
}

function OrderDetailItemsContentLayout({ title, children }: OrderDetailLayoutProps) {
  return (
    <section className="pt-7 mb-2">
      <h2 className="pb-3 border-b-[1px] border-b-main font-medium">{title}</h2>
      <div className="pt-[17px] pb-5">{children}</div>
    </section>
  );
}

type OrderDetailTextContentProps = {
  title: string;
  value: string | string[] | number | undefined;
  className?: string;
};
function OrderDetailTextContent({ title, value, className }: OrderDetailTextContentProps) {
  return (
    <div className="pb-[14px] flex text-label-sm">
      <h3 className="w-[100px] text-gray_01">{title}</h3>
      <span className={className}>{value}</span>
    </div>
  );
}

const OrderDetailLayout = {
  OrderDetailTextContentLayout,
  OrderDetailItemsContentLayout,
  OrderDetailTextContent,
};

export default OrderDetailLayout;
