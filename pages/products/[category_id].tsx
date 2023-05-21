import Footer from '@/components/footer/Footer';
import DownHeader from '@/components/header/DownHeader';
import TopHeader from '@/components/header/TopHeader';
import Loader from '@/components/products/Loader';
import ProductImage from '@/components/products/ProductImage';
import ProductInfo from '@/components/products/ProductInfo';
import Purchase from '@/components/products/Purchase';
import { useProductInfo } from '@/hooks/useProductInfo';
import { useRouter } from 'next/router';

export default function Item() {
  const { query } = useRouter();

  const id = query.itemId;

  const { productInfo, isLoading, error } = useProductInfo(Number(id));

  if (isLoading) return <Loader />;

  if (error) return <p className="text-center leading-[100vh] text-red font-bold text-lg">상품 상세 정보 조회 실패</p>;

  return (
    <>
      <TopHeader />
      <DownHeader />
      <ProductImage {...productInfo} />
      <ProductInfo {...productInfo} />
      <Purchase {...productInfo} id={Number(id)} />
      <Footer />
    </>
  );
}
