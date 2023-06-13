import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import useSearch from '@/hooks/useSearch';
import ProductList from '@/components/products/ProductList';
import Layout from '@/components/layout/Layout';
import CategoryFilter from '@/components/products/CategoryFilter';
import SearchBar from '@/components/products/SearchBar';
import Sort from '@/components/products/Sort';
import NavBar from '@/components/footer/NavBar';
import Footer from '@/components/footer/Footer';
import Loader from '@/components/Loader';
import Header from '@/components/header/Header';
import { useRecoilState, useRecoilValue } from 'recoil';
import searchBarState from '@/atoms/searchBarAtom';
import { sortByList, sortByState } from '@/atoms/sortByAtom';

export default function SearchResults() {
  const [sortBy, setSortBy] = useRecoilState(sortByState);
  const showSearchBar = useRecoilValue(searchBarState);

  const { query } = useRouter();
  const {
    data: searchResults,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useSearch({
    searchQuery: query.search_query as string,
    sortBy: sortBy.english,
  });

  const err = error as AxiosError;

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
        {isLoading && <Loader className="my-10" />}

        {isError &&
          (err.response?.status === 404 ? (
            <p className="text-red font-bold text-center my-10">{query.search_query}에 대한 검색결과가 없습니다.</p>
          ) : (
            <p className="text-red font-bold text-center my-10">상품 검색 실패</p>
          ))}

        {isSuccess && <ProductList products={searchResults} />}
        <NavBar />
        <Footer />
      </Layout>
    </>
  );
}
