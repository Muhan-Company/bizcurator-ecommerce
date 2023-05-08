import Products from './Products';

export default function WeeklyTrending() {
  return (
    <div className="px-3 space-y-3 mb-10">
      <h1 className="font-normal text-main text-head-xs">이번 주 인기 급상승Top3</h1>
      <Products />
    </div>
  );
}
