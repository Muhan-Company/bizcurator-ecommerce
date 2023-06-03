import useSearch from '@/hooks/useSearch';
import { useRouter } from 'next/router';
import ProductList from '@/components/products/ProductList';
import Layout from '@/components/layout/Layout';
import CategoryFilter from '@/components/products/CategoryFilter';
import SearchBar from '@/components/products/SearchBar';
import Sort from '@/components/products/Sort';
import NavBar from '@/components/footer/NavBar';
import Footer from '@/components/footer/Footer';
import { useRecoilState, useRecoilValue } from 'recoil';
import searchBarState from '@/atoms/searchBarAtom';
import { sortByList, sortByState } from '@/atoms/sortByAtom';
import Loader from '@/components/products/Loader';
import { useEffect } from 'react';
import Header from '@/components/header/Header';

export default function SearchResults() {
  const [sortBy, setSortBy] = useRecoilState(sortByState);
  const showSearchBar = useRecoilValue(searchBarState);

  const { query } = useRouter();
  const { data, isLoading, isError } = useSearch({
    searchQuery: query.search_query as string,
    sortBy: sortBy.english,
  });

  const searchResults = data?.result.products;

  useEffect(() => {
    setSortBy(sortByList[0]);
  }, [setSortBy]);

  return (
    <>
      <Layout>
        <Header />
        <CategoryFilter />
        {showSearchBar ? <SearchBar /> : <div className="h-[55px]"></div>}
        <Sort />
        {isLoading && (
          <div className="my-10">
            <Loader />
          </div>
        )}

        {isError && <p className="text-red font-bold text-center my-10">상품 검색 실패</p>}

        {!isLoading && !isError && <ProductList products={searchResults} />}
        <NavBar />
        <Footer />
      </Layout>
    </>
  );
}
