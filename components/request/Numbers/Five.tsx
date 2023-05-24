import { FormValues } from './One';

export default function Five({ formValues5 }: { formValues5: FormValues }) {
  const { title, description, register, errors } = formValues5;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        5. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <input
        {...register('deliveryDate')}
        type="date"
        data-placeholder="YYYY-MM-DD"
        className="outline-none bg-gray-100 pl-12 leading-[50px] font-normal text-main
text-body-xs rounded-lg h-[50px]"
      />
      {errors.deliveryDate && <p className="err-msg">{errors.deliveryDate.message}</p>}
    </div>
  );
}
