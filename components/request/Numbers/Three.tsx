import { FormValues } from './One';

export default function Three({ formValues3 }: { formValues3: FormValues }) {
  const { title, description, register, errors } = formValues3;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        3. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>
      <input
        {...register('three')}
        className="bg-gray-100 px-4 font-normal text-main text-body-xs rounded-lg h-[50px] w-full outline-none"
      />
      {errors.three && <p className="text-red text-xs font-medium">{errors.three.message}</p>}
    </div>
  );
}
