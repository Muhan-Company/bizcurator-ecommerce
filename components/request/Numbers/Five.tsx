import { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from '../DatePicker';

interface FormValues5 {
  title: string;
  description: string;
  secondDate: Date | undefined;
  setSecondDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function Five({ formValues5 }: { formValues5: FormValues5 }) {
  const { title, description, secondDate, setSecondDate } = formValues5;

  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  return (
    <div className="mt-12 gap-y-1.5 flex flex-col">
      <label className="font-bold text-label-md text-main space-y-2">
        5. {title} <span className="text-red">*</span>
        <p className="font-normal text-body-sm">{description}</p>
      </label>
      <div
        onClick={() => setShowCalendar((prev) => !prev)}
        className={`bg-gray-100 px-4 leading-[50px] font-normal ${
          secondDate ? 'text-main' : 'text-gray_01'
        }  text-body-xs rounded-lg h-[50px]`}
      >
        {secondDate ? format(secondDate, 'yyyy-MM-dd') : 'YYYY-MM-DD'}
      </div>
      {showCalendar && <DatePicker date={secondDate} setDate={setSecondDate} setShowCalendar={setShowCalendar} />}
    </div>
  );
}
