import { useRouter } from 'next/router';
import DateFilterLink from '../my-requests/DateFilterLink';

const PERIOD = [
  { period: '오늘', value: 0 },
  { period: '1개월', value: 30 },
  { period: '3개월', value: 30 * 3 },
  { period: '6개월', value: 30 * 6 },
  { period: '1년', value: 30 * 12 },
];

export default function DateFilter() {
  const { query } = useRouter();

  return (
    <div className="pb-4 center gap-2 border-b-[1px] border-gray_02">
      {PERIOD.map((obj, index: number) => (
        <DateFilterLink
          key={index}
          href={`${query.state}?filterMonth=${obj.value}`}
          className="w-[54px] h-[25px] border-gray_04 box-border
        text-label-sm shadow-[0_0px_20px_0px_rgba(0,0,0,0.02)]"
        >
          {obj.period}
        </DateFilterLink>
      ))}
    </div>
  );
}
