import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import CategoryFilter from '@/components/product/CategoryFilter';
import ProductList from '@/components/product/ProductList';

export default function Products() {
  return (
    <Layout>
      <DownHeader />
      <CategoryFilter />
      <ProductList />
      <NavBar />
      <Footer />
    </Layout>
  );
}
