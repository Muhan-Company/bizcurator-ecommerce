import { getProductInfo } from '@/apis/productApis';
import { useQuery } from '@tanstack/react-query';

const useProductInfo = (product_id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products', product_id.toString()],
    queryFn: () => getProductInfo(product_id),
  });

  return { productInfo: data?.result.productDetail, isLoading, error };
};

export { useProductInfo };
