import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormInputs } from '../PurchaseForm';

interface FormValues5 {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrors<IFormInputs>;
  title: string;
  description: string;
}

export default function Five({ formValues5 }: { formValues5: FormValues5 }) {
  const { title, description, register, errors } = formValues5;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        5. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>
      <input
        {...register('deliveryDate')}
        type="date"
        data-placeholder="YYYY-MM-DD"
        className="outline-none bg-gray-100 pl-12 leading-[50px] font-normal text-main
text-body-xs rounded-lg h-[50px]"
      />
      {errors.deliveryDate && <p className="text-red text-xs font-medium break-keep">{errors.deliveryDate.message}</p>}
    </div>
  );
}
