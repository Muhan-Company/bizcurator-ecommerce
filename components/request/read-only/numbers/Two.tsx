import { FormValues } from '../Manufactureform';

interface FormValues2 extends FormValues {
  productDetail: string;
}

export default function Two({ formValues2 }: { formValues2: FormValues2 }) {
  const { title, description, productDetail } = formValues2;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        2. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <section className="bg-gray-100 px-4 font-normal text-main text-body-xs rounded-lg h-[50px] leading-[50px]">
        {productDetail}
      </section>
    </div>
  );
}
