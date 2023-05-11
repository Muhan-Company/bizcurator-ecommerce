import MainBanner from '@/components/home/MainBanner';
import PromoBanner from '@/components/home/PromoBanner';
import ProductCategoryList from '@/components/home/ProductCategoryList';
import WeeklyTrending from '@/components/home/WeeklyTrending';
import MonthlyTrending from '@/components/home/MonthlyTrending';
import Recommendation from '@/components/home/Recommendation';
import NavBar from '@/components/footer/NavBar';
import RequestBanner from '@/components/home/RequestBanner';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main>
      <Layout>
        <DownHeader />
        <MainBanner />
        <ProductCategoryList />
        <PromoBanner />
        <WeeklyTrending />
        <MonthlyTrending />
        <Recommendation />
        <RequestBanner />
        <Footer />
        <NavBar />
      </Layout>
    </main>
  );
}
