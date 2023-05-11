import searchBarState from '@/atoms/seachBarAtom';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import CategoryFilter from '@/components/products/CategoryFilter';
import ProductList from '@/components/products/ProductList';
import SearchBar from '@/components/products/SearchBar';
import { useRecoilValue } from 'recoil';

export default function Products() {
  const showSearchBar = useRecoilValue(searchBarState);

  return (
    <Layout>
      <DownHeader />
      <CategoryFilter />
      {showSearchBar ? <SearchBar /> : <div className="h-[55px]"></div>}
      <ProductList />
      <NavBar />
      <Footer />
    </Layout>
  );
}
