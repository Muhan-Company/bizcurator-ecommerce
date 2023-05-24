export default function CompanyInput({ value }: { value: string }) {
  return (
    <div className="space-y-[10px]">
      <h3 className="font-bold text-gray_01 text-body-md">{value}</h3>
      <section className="my-info"></section>
    </div>
  );
}
