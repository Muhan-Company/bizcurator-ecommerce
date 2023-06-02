import { CategoryProducts, getCategoryProducts } from '@/apis/productApis';
import { ProductDetail } from '@/pages';
import { useQuery } from '@tanstack/react-query';

interface CategoriesResult {
  result: {
    products: ProductDetail[];
  };
}

const useCategories = ({ categoryId, sortBy }: CategoryProducts) => {
  return useQuery({
    queryKey: ['products', categoryId, sortBy],
    queryFn: () => getCategoryProducts({ categoryId, sortBy }),
    select: (data: CategoriesResult) => data.result.products,
    enabled: (categoryId !== 0 && !!categoryId) || categoryId === 0,
  });
};

export default useCategories;
