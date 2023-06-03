import { ProductDetail } from '@/pages';
import Product from '../home/Product';

export default function ProductList({ products }: { products: ProductDetail[] }) {
  return (
    <div className="mt-3 grid grid-cols-3 gap-[9px] md:gap-4 px-3 mb-20">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
