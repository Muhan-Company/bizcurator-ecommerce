import { FormValues } from '../Manufactureform';

interface FormValuesN2 extends FormValues {
  establishYear: number;
}

export default function NumTwo({ formValues2 }: { formValues2: FormValuesN2 }) {
  const { title, description, establishYear } = formValues2;
  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        2. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <section className="bg-gray-100 px-4 font-normal text-main text-body-xs rounded-lg h-[50px] leading-[50px]">
        {establishYear}
      </section>
    </div>
  );
}
