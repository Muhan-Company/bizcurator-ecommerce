import { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import CustomInput from './CustomInput';
registerLocale('ko', ko);

export default function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div>
      <DatePicker
        locale="ko"
        customInput={<CustomInput value="asdf" />}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}
