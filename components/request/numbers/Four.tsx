import { FormValues } from './One';

interface FormValues4 extends FormValues {
  desiredEstimateDate?: string;
}

export default function Four({ formValues4 }: { formValues4: FormValues4 }) {
  const { title, description, register, errors, desiredEstimateDate } = formValues4;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        4. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm break-keep">{description}</p>
      </label>

      <input
        {...register('desired_estimate_date')}
        type="date"
        data-placeholder="YYYY-MM-DD"
        defaultValue={desiredEstimateDate}
        className="outline-none bg-gray-100 pl-12 leading-[50px] font-normal text-main
        text-body-xs rounded-lg h-[50px]"
      />
      {errors.desired_estimate_date && <p className="err-msg">{errors.desired_estimate_date.message}</p>}
    </div>
  );
}
