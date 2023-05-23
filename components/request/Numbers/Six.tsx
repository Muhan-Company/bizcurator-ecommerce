import { UploadIcon } from '@/components/Icons';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormInputs } from '../PurchaseForm';

interface FormValues6 {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrors<IFormInputs>;
  title: string;
  description: string;
  placeholder: string;
}

export default function Six({ formValues6 }: { formValues6: FormValues6 }) {
  const { register, errors, title, description, placeholder } = formValues6;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>
      <div className="grid grid-cols-3 h-[197px] gap-x-2">
        <section className="h-full col-span-1">
          <textarea
            className="h-full max-w-full bg-gray-100 p-2 resize-none text-main rounded-lg outline-none font-normal text-body-sm placeholder:text-gray_01"
            placeholder={placeholder}
            {...register('request')}
          />
          {errors.request && (
            <p className="text-red text-xs font-medium break-keep text-center">{errors.request.message}</p>
          )}
        </section>

        <label
          htmlFor="file"
          className="bg-gray-100 font-normal text-body-sm
          text-gray_01 flex justify-center items-center gap-x-2 text-gray h-full col-span-2 rounded-lg"
        >
          <UploadIcon color="#999999" />
          이미지 업로드
        </label>
        <input id="file" type="file" className="hidden" />
      </div>
    </div>
  );
}
