import { ProductDetail } from '@/pages';
import Product from '../home/Product';

export default function ProductList({ searchResults }: { searchResults: ProductDetail[] }) {
  return (
    <div className="mt-[70px] grid grid-cols-3 gap-[9px] md:gap-4 px-3 mb-20">
      {searchResults?.map((result: ProductDetail) => (
        <Product key={result.id} {...result} />
      ))}
    </div>
  );
}
