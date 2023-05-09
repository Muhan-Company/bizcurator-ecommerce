import Product from './Product';

export default function MonthlyTrending() {
  return (
    <div className="px-3 lg:px-24 xl:px-48 space-y-3 lg:space-y-4 my-10">
      <h1 className="font-normal text-main text-head-xs lg:font-bold lg:text-head-xl">이번 달 인기제품 Top 3</h1>
      <div className="grid grid-cols-3 gap-x-[9px] md:gap-x-4">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
