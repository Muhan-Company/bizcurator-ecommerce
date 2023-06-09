import ProtectRoute from '@/components/ProtectRoute';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Loader from '@/components/Loader';
import ProductImage from '@/components/products/ProductImage';
import ProductInfo from '@/components/products/ProductInfo';
import Purchase from '@/components/products/Purchase';
import useProductInfo from '@/hooks/useProductInfo';
import { useRouter } from 'next/router';

export default function Item() {
  const { query } = useRouter();

  const id = query.itemId;

  const { data, isLoading, isError } = useProductInfo(Number(id));

  const productInfo = data?.result.productDetail;

  if (isLoading) return <Loader />;

  if (isError)
    return <p className="text-center leading-[100vh] text-red font-bold text-lg">상품 상세 정보 조회 실패</p>;

  return (
    <div className="layout">
      <ProtectRoute />
      <Header />
      <div className="md:flex mb-10 mt-5 items-start h-full">
        <ProductImage {...productInfo} />
        <ProductInfo {...productInfo} id={Number(id)} />
      </div>
      <Purchase {...productInfo} id={Number(id)} />
      <Footer />
    </div>
  );
}
