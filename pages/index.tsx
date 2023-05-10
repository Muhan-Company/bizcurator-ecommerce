import MainBanner from '@/components/body/MainBanner';
import PromoBanner from '@/components/body/PromoBanner';
import ProductCategoryList from '@/components/body/ProductCategoryList';
import WeeklyTrending from '@/components/body/WeeklyTrending';
import MonthlyTrending from '@/components/body/MonthlyTrending';
import Recommendation from '@/components/body/Recommendation';
import NavBar from '@/components/footer/NavBar';
import RequestBanner from '@/components/body/RequestBanner';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';
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
