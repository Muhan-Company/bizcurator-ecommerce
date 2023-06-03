import { FormValues } from '../Manufactureform';

interface FormValues1 extends FormValues {
  category: string;
  productName: string;
}

export default function One({ formValues1 }: { formValues1: FormValues1 }) {
  const { title, description, category, productName } = formValues1;

  return (
    <div className="space-y-1.5">
      <label className="font-bold text-label-md text-main space-y-2">
        1. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <section className="px-4 py-2 font-medium text-main text-body-sm w-[160px] border-[1px] border-main rounded-lg">
        {category}
      </section>
      <section className="bg-gray-100 px-4 font-normal text-main text-body-xs leading-[50px] rounded-lg h-[50px]">
        {productName}
      </section>
    </div>
  );
}
