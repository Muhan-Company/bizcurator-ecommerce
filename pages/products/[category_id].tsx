import { useProductInfo } from '@/apis/productApis';
import Footer from '@/components/footer/Footer';
import DownHeader from '@/components/header/DownHeader';
import TopHeader from '@/components/header/TopHeader';
import Loader from '@/components/products/Loader';
import ProductCarousel from '@/components/products/ProductCarousel';
import ProductInfo from '@/components/products/ProductInfo';
import Purchase from '@/components/products/Purchase';
import { useRouter } from 'next/router';

export default function Item() {
  const { query } = useRouter();

  const productId = query.itemId;

  const { productInfo, isLoading, error } = useProductInfo(productId as string);

  if (isLoading) return <Loader />;

  if (error) return <p className="text-center leading-[100vh]">Something went wrong.</p>;

  return (
    <>
      <TopHeader />
      <DownHeader />
      <ProductCarousel {...productInfo} />
      <ProductInfo {...productInfo} />
      <Purchase {...productInfo} />
      <Footer />
    </>
  );
}
