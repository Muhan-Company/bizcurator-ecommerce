import MainBanner from '@/components/body/MainBanner';
import PromoBanner from '@/components/body/PromoBanner';
import ProductCategoryList from '@/components/body/ProductCategoryList';
import Header from '@/components/header/Header';
import WeeklyTrending from '@/components/body/WeeklyTrending';
import MonthlyTrending from '@/components/body/MonthlyTrending';
import Recommendation from '@/components/body/Recommendation';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import RequestBanner from '@/components/body/RequestBanner';

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
      <RequestBanner />
      <Footer />
      <NavBar />
    </main>
  );
}
