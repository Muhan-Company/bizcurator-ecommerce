import { FormValues } from '../Manufactureform';

interface FormValues3 extends FormValues {
  quantity: number;
}

export default function Three({ formValues3 }: { formValues3: FormValues3 }) {
  const { title, description, quantity } = formValues3;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <section className="bg-gray-100 px-4 font-normal text-main text-body-xs rounded-lg h-[50px] leading-[50px]">
        {quantity}
      </section>
    </div>
  );
}
