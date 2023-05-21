import useSearch from '@/hooks/useSearch';
import { useRouter } from 'next/router';
import ProductList from '@/components/products/ProductList';
import Layout from '@/components/layout/Layout';
import DownHeader from '@/components/header/DownHeader';
import CategoryFilter from '@/components/products/CategoryFilter';
import SearchBar from '@/components/products/SearchBar';
import Sort from '@/components/products/Sort';
import NavBar from '@/components/footer/NavBar';
import Footer from '@/components/footer/Footer';
import { useRecoilValue } from 'recoil';
import searchBarState from '@/atoms/searchBarAtom';
import { sortByState } from '@/atoms/sortByAtom';

export default function SearchResults() {
  const sortBy = useRecoilValue(sortByState);
  const showSearchBar = useRecoilValue(searchBarState);

  const { query } = useRouter();
  const { searchResults, isLoading, error } = useSearch({
    searchQuery: query.search_query as string,
    sort: sortBy.sortName,
  });

  return (
    <>
      <Layout>
        <DownHeader />
        <CategoryFilter />
        {showSearchBar ? <SearchBar /> : <div className="h-[55px]"></div>}
        <div className="relative">
          <Sort />
          <ProductList searchResults={searchResults} />
        </div>
        <NavBar />
        <Footer />
      </Layout>
    </>
  );
}
