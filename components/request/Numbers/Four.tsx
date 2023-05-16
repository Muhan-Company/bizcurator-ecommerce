import ReactDatePicker from '../ReactDatePicker';

export interface FormValues4 {
  title: string;
  description: string;
}

export default function Four({ formValues4 }: { formValues4: FormValues4 }) {
  const { title, description } = formValues4;

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        4. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>
      <ReactDatePicker />
    </div>
  );
}
