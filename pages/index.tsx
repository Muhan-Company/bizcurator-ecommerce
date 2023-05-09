import MainBanner from '@/components/body/MainBanner';
import PromoBanner from '@/components/body/PromoBanner';
import ProductCategoryList from '@/components/body/ProductCategoryList';
import Header from '@/components/header/Header';
import WeeklyTrending from '@/components/body/WeeklyTrending';
import MonthlyTrending from '@/components/body/MonthlyTrending';
import Recommendation from '@/components/body/Recommendation';

export default function Home() {
  return (
    <main>
      <Header />
      <MainBanner />
      <ProductCategoryList />
      <PromoBanner />
      <WeeklyTrending />
      <MonthlyTrending />
      <Recommendation />
    </main>
  );
}
