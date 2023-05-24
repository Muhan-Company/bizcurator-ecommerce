interface RequestDetailInfo {
  title: string;
  value: string;
  className?: string | boolean;
  children?: React.ReactNode;
}

export default function RequestDetailInfo({ title, value, className, children }: RequestDetailInfo) {
  return (
    <div className="px-3 py-8 border-b border-gray_02">
      <div className="flex items-center">
        <h3 className="w-[75px] font-bold">{title}</h3>
        <span className={`text-body-sm ${className || 'text-gray_01'}`}>{value}</span>
      </div>
      {children}
    </div>
  );
}
