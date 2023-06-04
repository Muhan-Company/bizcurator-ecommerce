import Image from 'next/image';
import { FormValues } from '../Manufactureform';

interface FormValues6 extends FormValues {
  image: string;
  requestContext: string;
  companyIntroduction: string;
}

export default function Six({ formValues6 }: { formValues6: FormValues6 }) {
  const { title, description, image, requestContext, companyIntroduction } = formValues6;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <div className="grid grid-cols-3 h-[197px] gap-x-2">
        <section className="h-full bg-gray-100 p-2 text-main rounded-lg font-normal text-body-sm col-span-1">
          {requestContext || companyIntroduction}
        </section>

        <div className="col-span-2 h-full relative rounded-lg overflow-hidden">
          <Image src={image} alt="Product Image" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
