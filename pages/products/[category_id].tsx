import Footer from '@/components/footer/Footer';
import DownHeader from '@/components/header/DownHeader';
import TopHeader from '@/components/header/TopHeader';
import ProductCarousel from '@/components/products/ProductCarousel';
import ProductInfo from '@/components/products/ProductInfo';
import Purchase from '@/components/products/Purchase';

export default function Item() {
  let name = '야외 테이블과 의자 세트/화이트';
  let min_quantity = 20;
  let regular_price = 30000;
  let sale_price = 20000;

  return (
    <>
      <TopHeader />
      <DownHeader />
      <ProductCarousel />
      <ProductInfo />
      <Purchase name={name} min_quantity={min_quantity} regular_price={regular_price} sale_price={sale_price} />
      <Footer />
    </>
  );
}
