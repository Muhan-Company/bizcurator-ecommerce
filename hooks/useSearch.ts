import search, { SearchType } from '@/apis/searchApi';
import { useQuery } from '@tanstack/react-query';

const useSearch = ({ searchQuery, sortBy }: SearchType) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['search', searchQuery, sortBy],
    queryFn: () => search({ searchQuery, sortBy }),
  });

  return { searchResults: data?.result.products, isLoading, error };
};

export default useSearch;
