import { useState } from 'react';

const PERIOD_RANGE = {
  // todo: api 요청값 형식에 따라 수정
  오늘: 0,
  '1개월': 30,
  '3개월': 90,
  '6개월': 120,
  '1년': 365,
};

export default function DateFilter() {
  const [active, setActive] = useState('3개월');
  return (
    <div className="pb-4 center gap-2 border-b-[1px] border-gray_02">
      {Object.keys(PERIOD_RANGE).map((period: string, index: number) => (
        <DateFilterButton key={index} period={period} active={active} setActive={setActive} />
      ))}
    </div>
  );
}

type DateFilterButton = {
  period: string;
  onClick?: (e: any) => void;
  active: string;
  setActive: (active: string) => void;
};

function DateFilterButton({ period, active, setActive }: DateFilterButton) {
  return (
    <div
      className={`w-[54px] h-[25px] border-gray_04 box-border ${
        active === period ? 'btn-primary' : 'btn-white'
      } text-label-sm shadow-[0_0px_20px_0px_rgba(0,0,0,0.02)]`}
      onClick={(e) => setActive((e.target as HTMLElement).innerText)}
    >
      {period}
    </div>
  );
}
