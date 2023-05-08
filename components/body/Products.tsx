import Product from './Product';

export default function Products() {
  return (
    <div className="grid grid-cols-3 gap-x-[9px] md:gap-x-4">
      <Product />
      <Product />
      <Product />
    </div>
  );
}
