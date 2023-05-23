import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormInputs } from '../PurchaseForm';

interface FormValues4 {
  title: string;
  description: string;
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrors<IFormInputs>;
}

export default function Four({ formValues4 }: { formValues4: FormValues4 }) {
  const { title, description, register, errors } = formValues4;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        4. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>

      <input
        {...register('estimateDate')}
        type="date"
        data-placeholder="YYYY-MM-DD"
        className="outline-none bg-gray-100 pl-12 leading-[50px] font-normal text-main
text-body-xs rounded-lg h-[50px]"
      />
      {errors.estimateDate && <p className="text-red text-xs font-medium break-keep">{errors.estimateDate.message}</p>}
    </div>
  );
}
