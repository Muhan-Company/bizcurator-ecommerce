import { ProductDetail } from '@/pages';
import Product from './Product';

export default function WeeklyTrending({ weeklyTrending }: { weeklyTrending: ProductDetail[] }) {
  return (
    <div className="space-y-3 lg:space-y-4 mt-20">
      <h1 className="font-normal text-main text-head-xs lg:font-bold lg:text-head-xl">이번 주 인기 급상승 Top3</h1>
      <div className="grid grid-cols-3 gap-x-[9px] md:gap-x-4">
        {weeklyTrending.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
