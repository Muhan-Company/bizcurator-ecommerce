import { FormValues } from './NumOne';

export default function NumTwo({ formValues2 }: { formValues2: FormValues }) {
  const { title, description, register, errors } = formValues2;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>
      <input
        type="number"
        {...register('established_year', { valueAsNumber: true })}
        className="bg-gray-100 px-4 font-normal text-main text-body-xs rounded-lg h-[50px] w-full outline-none"
      />
      {errors.established_year && <p className="err-msg">{errors.established_year.message}</p>}
    </div>
  );
}
