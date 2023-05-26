import search, { SearchType } from '@/apis/searchApi';
import { useQuery } from '@tanstack/react-query';

const useSearch = ({ searchQuery, sortBy }: SearchType) => {
  return useQuery({
    queryKey: ['search', searchQuery, sortBy],
    queryFn: () => search({ searchQuery, sortBy }),
  });
};

export default useSearch;
