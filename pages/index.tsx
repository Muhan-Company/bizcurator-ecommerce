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
import { getMonthlyTrending, getWeeklyTrending } from '@/apis/trendingApi';

export interface Trending {
  id: number;
  category_id: number;
  product_name: string;
  main_image_url: string;
  detail_image_url?: string;
  regular_price: number;
  sale_price: number;
  min_quantity: number;
}

type TrendingProps = {
  weeklyTrending: Trending[];
  monthlyTrending: Trending[];
};

export default function Home({ weeklyTrending, monthlyTrending }: TrendingProps) {
  return (
    <main>
      <Layout>
        <DownHeader />
        <MainBanner />
        <ProductCategoryList />
        <PromoBanner />
        <WeeklyTrending weeklyTrending={weeklyTrending} />
        <MonthlyTrending monthlyTrending={monthlyTrending} />
        <Recommendation />
        <RequestBanner />
        <Footer />
        <NavBar />
      </Layout>
    </main>
  );
}

export async function getServerSideProps() {
  const [weeklyTrending, monthlyTrending] = await Promise.all([getWeeklyTrending(), getMonthlyTrending()]);

  return {
    props: {
      weeklyTrending: weeklyTrending.result.topWeeklyProducts,
      monthlyTrending: monthlyTrending.result.topMonthlyProducts,
    }, // will be passed to the page component as props
  };
}
