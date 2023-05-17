import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ko from 'date-fns/locale/ko';

interface DatePickerProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DatePicker({ date, setDate, setShowCalendar }: DatePickerProps) {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(date);

  function isInThePast(date: Date) {
    const today = new Date();

    // 👇️ OPTIONAL!
    // This line sets the hour of the current date to midnight
    // so the comparison only returns `true` if the passed-in date
    // is at least yesterday
    today.setHours(0, 0, 0, 0);

    return date < today;
  }

  const renderDayContent = (date: Date) => {
    const isPastDay = isInThePast(date);
    const isSelected = date.toDateString() === selectedDay?.toDateString();

    return (
      <div
        onClick={() => setSelectedDay(date)}
        className={`${
          isPastDay
            ? 'text-neutral-400'
            : isSelected
            ? 'text-white font-bold rounded-full bg-main'
            : 'text-main font-normal'
        } w-10 h-10 text-center leading-[40px]`}
      >
        {date.getDate()}
      </div>
    );
  };

  return (
    <Calendar
      locale={ko}
      color="transparent"
      date={date}
      onChange={(date) => {
        setDate(date);
        setShowCalendar(false);
      }}
      dayContentRenderer={renderDayContent}
    />
  );
}
