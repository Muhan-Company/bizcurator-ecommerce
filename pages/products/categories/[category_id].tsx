import { useRecoilState, useRecoilValue } from 'recoil';
import searchBarState from '@/atoms/searchBarAtom';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/footer/NavBar';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import CategoryFilter from '@/components/products/CategoryFilter';
import ProductList from '@/components/products/ProductList';
import SearchBar from '@/components/products/SearchBar';
import Sort from '@/components/products/Sort';
import { useRouter } from 'next/router';
import { sortByList, sortByState } from '@/atoms/sortByAtom';
import useCategories from '@/hooks/useCategories';
import Loader from '@/components/products/Loader';
import { useEffect } from 'react';

export default function Products() {
  const showSearchBar = useRecoilValue(searchBarState);
  const [sortBy, setSortBy] = useRecoilState(sortByState);

  const { query } = useRouter();
  const categoryId = Number(query.category_id);

  useEffect(() => {
    setSortBy(sortByList[0]);
  }, [setSortBy]);

  const { data, isLoading, isError } = useCategories({ categoryId, sortBy: sortBy.english });

  const categoryProducts = data?.result.products;

  return (
    <Layout>
      <DownHeader />
      <CategoryFilter />
      {showSearchBar ? <SearchBar /> : <div className="h-[55px]"></div>}
      <Sort />
      {isLoading && (
        <div className="my-10">
          <Loader />
        </div>
      )}

      {isError && <p className="text-red font-bold text-center my-10">상품 조회 실패</p>}

      {!isLoading && !isError && <ProductList products={categoryProducts} />}
      <NavBar />
      <Footer />
    </Layout>
  );
}
