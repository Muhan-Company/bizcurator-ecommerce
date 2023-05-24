import { selectedDateFilterState } from '@/atoms/selectedDateFilterAtom';
import { SetterOrUpdater, useRecoilState } from 'recoil';

const PERIOD = [
  { period: '오늘', value: 0 },
  { period: '1개월', value: 30 },
  { period: '3개월', value: 30 * 3 },
  { period: '6개월', value: 30 * 6 },
  { period: '1년', value: 30 * 12 },
];
export default function DateFilter() {
  const [active, setActive] = useRecoilState(selectedDateFilterState);

  return (
    <div className="pb-4 center gap-2 border-b-[1px] border-gray_02">
      {PERIOD.map((obj, index: number) => (
        <DateFilterButton key={index} obj={obj} active={active} setActive={setActive} />
      ))}
    </div>
  );
}

type DateFilterButton = {
  obj: {
    period: string;
    value: number;
  };
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  active: number;
  setActive: SetterOrUpdater<number>;
};

function DateFilterButton({ obj, active, setActive }: DateFilterButton) {
  return (
    <div
      className={`w-[54px] h-[25px] border-gray_04 box-border ${
        active === obj.value ? 'btn-primary' : 'btn-white'
      } text-label-sm shadow-[0_0px_20px_0px_rgba(0,0,0,0.02)]`}
      onClick={() => setActive(obj.value)}
    >
      {obj.period}
    </div>
  );
}
