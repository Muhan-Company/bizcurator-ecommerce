import Product from '../home/Product';

export default function ProductList() {
  return (
    <div className="mt-[100px] grid grid-cols-3 gap-[9px] md:gap-4 px-3 mb-20">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
