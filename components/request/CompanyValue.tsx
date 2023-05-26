interface CompanyValueProps {
  name: string;
  value: string | number;
}

export default function CompanyValue({ name, value }: CompanyValueProps) {
  return (
    <div className="space-y-[10px]">
      <h3 className="font-bold text-gray_01 text-body-md">{name}</h3>
      <section className="my-info">{value}</section>
    </div>
  );
}
