import { CategoryProducts, getCategoryProducts } from '@/apis/productApis';
import { useQuery } from '@tanstack/react-query';

const useCategories = ({ categoryId, sortBy }: CategoryProducts) => {
  return useQuery({
    queryKey: ['products', categoryId, sortBy],
    queryFn: () => getCategoryProducts({ categoryId, sortBy }),
  });
};

export default useCategories;
