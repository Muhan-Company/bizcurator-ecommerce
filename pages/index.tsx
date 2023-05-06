import MainBanner from '@/components/body/MainBanner';
import ProductCategoryList from '@/components/body/ProductCategoryList';
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <ProductCategoryList />
    </main>
  );
}
