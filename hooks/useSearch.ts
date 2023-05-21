import search, { SearchType } from '@/apis/searchApi';
import { useQuery } from '@tanstack/react-query';

const useSearch = ({ searchQuery, sort }: SearchType) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['search', searchQuery, sort],
    queryFn: () => search({ searchQuery, sort }),
  });

  return { searchResults: data?.result.products, isLoading, error };
};

export default useSearch;
