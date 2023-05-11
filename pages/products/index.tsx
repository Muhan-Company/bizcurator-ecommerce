import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Categories from '@/components/product/Categories';
import ProductList from '@/components/product/ProductList';
// import { useRouter } from 'next/router';

export default function Products() {
  // const router = useRouter();
  // router.query.category_id
  // router.query.sort
  return (
    <Layout>
      <DownHeader />
      <Categories />
      <ProductList />
      <NavBar />
      <Footer />
    </Layout>
  );
}
