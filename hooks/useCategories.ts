import { CategoryProducts, getCategoryProducts } from '@/apis/productApis';
import { useQuery } from '@tanstack/react-query';

const useCategories = ({ categoryId, sortBy }: CategoryProducts) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products', categoryId, sortBy],
    queryFn: () => getCategoryProducts({ categoryId, sortBy }),
  });

  return { categoryProducts: data?.result.products, isLoading, error };
};

export default useCategories;
